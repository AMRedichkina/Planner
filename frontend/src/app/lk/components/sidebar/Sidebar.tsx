"use client"

import { Box, Drawer } from '@mui/material'
import { MenuItem } from './Menu/MenuItem'
import { MENU } from './Menu/menu.data'
import useMediaQuery from '@mui/material/useMediaQuery';


type SidebarProps = {
	className?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
	const isMobile = useMediaQuery('(max-width:768px)');
	return (isMobile ?
			(<div className={className}>
				<Drawer 
                variant="permanent"
                open
                sx={{
					width: 56,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: 56,
						boxSizing: 'border-box',
					},
				}}
            >
                <Box sx={{ overflow: 'auto' }}>
                    {MENU.map((item) => (
                        <MenuItem item={item} key={item.link} iconOnly={true} />
                    ))}
                </Box>
            </Drawer> 
			</div>)
			:	
			(<Drawer className={className}
                    variant="permanent"
                    open
                    sx={{
                        width: '25%',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: '25%',
                            boxSizing: 'border-box',
                        },
                    }}
                >
					<Box px={3} py={2} width={100} position='relative'>
						{MENU.map((item) => (
							<MenuItem item={item} key={item.link} />
						))}
					</Box>
				</Drawer>)
	)
}
