import { useEffect, useRef, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface IUseLocalStorage<T> {
	key: string
	defaultValue: T
}

export function useLocalStorage<T>({
	defaultValue,
	key
}: IUseLocalStorage<T>): [T, Dispatch<SetStateAction<T>>, boolean] {
	const [isLoading, setIsLoading] = useState(true)

	const isMounted = useRef(false)
	const [value, setValue] = useState<T>(defaultValue)

	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key)
			if (item) {
				setValue(JSON.parse(item))
			}
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}

		return () => {
			isMounted.current = false
		}
	}, [key])

	useEffect(() => {
		if (isMounted.current) {
			window.localStorage.setItem(key, JSON.stringify(value))
		} else {
			isMounted.current = true
		}
	}, [key, value])

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) {
				try {
					const newValue = JSON.parse(event.newValue!) ?? defaultValue;
					setValue(newValue);
				} catch (error) {
					console.error(`Error parsing localStorage value: ${error}`);
				}
			}
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange)
		};
	}, [defaultValue, key]);

	return [value, setValue, isLoading]
}
