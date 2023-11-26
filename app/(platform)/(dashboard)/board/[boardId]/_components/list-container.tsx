'use client'

import { ListWithCards } from '@/types'
import { useState } from 'react'
import { ListForm } from './list-form'
import { ListItem } from './list-item'

interface ListContainerProps {
	data: ListWithCards[]
	boardId: string
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
	const [orderedData, setOrderedData] = useState(data)
	return (
		<div>
			<ol className='flex gap-3 h-full'>
				{orderedData.map((list, index) => (
					<ListItem key={list.id} index={index} data={list} />
				))}
				<ListForm />
				<div className='flex-shrink-0 w-1' />
			</ol>
		</div>
	)
}
