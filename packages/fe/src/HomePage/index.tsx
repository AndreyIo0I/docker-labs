import Button from '@mui/material/Button'
import CreateNewFolder from '@mui/icons-material/CreateNewFolder'
import NoteAdd from '@mui/icons-material/NoteAdd'
import ContentTable, {ContentTableData} from '../ContentTable'
import {useEffect, useState} from 'react'

async function loadData(setData: (value: (((prevState: (ContentTableData[] | null)) => (ContentTableData[] | null)) | ContentTableData[] | null)) => void) {
	const data = (await (await fetch('/api/nodes')).json()) as ContentTableData[]
	setData(data)
}

export default function HomePage() {
	const [data, setData] = useState<ContentTableData[]|null>(null)

	useEffect(() => {
		loadData(setData)
			.catch(() => {})
	}, [])

	return (
		<div>
			{data && (
				<ContentTable
					data={data}
				/>
			)}
			<Button>
				<CreateNewFolder/>
			</Button>
			<Button>
				<NoteAdd/>
			</Button>
		</div>
	)
}
