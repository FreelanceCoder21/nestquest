import City from "../database/models/city";

export const addCity = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const city = await City.create({ name });
    return res.status(201).json({ city });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
