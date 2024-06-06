import React, { useState } from 'react';
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { X } from 'lucide-react';

import styles from './DatePicker.module.scss';
import { formatCaption } from './DatePickerCaption';
import { useOutside } from '@/hooks/useOutside';

dayjs.extend(LocalizedFormat);

interface IDatePicker {
	onChange: (value: string) => void;
	value: string;
	position?: 'left' | 'right';
}

export function DatePicker({ onChange, value, position = 'right' }: IDatePicker) {
	const [selected, setSelected] = useState<Date>();
	const { isShow, setIsShow, ref } = useOutside(false);

	const handleDaySelect: SelectSingleEventHandler = date => {
		const ISOdate = date?.toISOString();
		setSelected(date);
		if (ISOdate) {
			onChange(ISOdate);
			setIsShow(false);
		} else {
			onChange('');
		}
	};

	return (
		<div className={styles.datePickerContainer} ref={ref}>
			<button className={styles.toggleButton} onClick={() => setIsShow(!isShow)}>
				{value ? dayjs(value).format('LL') : 'Click to select'}
			</button>
			{value && (
				<button className={styles.clearButton} onClick={() => onChange('')}>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div
					className={`${styles.calendarContainer} ${position === 'left' ? styles.slideLeft : styles.slideRight}`}
					style={{ top: 'calc(100% + 0.7rem)' }}
				>
					<DayPicker
						fromYear={2023}
						toYear={2054}
						initialFocus={isShow}
						mode="single"
						defaultMonth={selected}
						selected={selected}
						onSelect={handleDaySelect}
						weekStartsOn={1}
						formatters={{ formatCaption }}
					/>
				</div>
			)}
		</div>
	);
}
