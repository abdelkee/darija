// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PronombreDataObjType } from '../../types';
import { db } from '../../utils/db'

type Data = {
  data: PronombreDataObjType
}

type Error = {
  error: unknown
}

export default function getPronombres(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  try {
    const pronombresData = db.pronombres_data;
    res.status(200).json({ data: pronombresData })
  } catch (error) {
    console.log('Error getting pronombres ', error)
    res.status(500).json({ error })
  }
}
