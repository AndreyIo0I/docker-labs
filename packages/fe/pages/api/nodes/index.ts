import {NextApiRequest, NextApiResponse} from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
	try {
		const rawData = await fetch('http://backend:3001/nodes/')
		res.status(200).send(await rawData.json())
	} catch (err) {
		console.log(err)
	}
}

export default handler