import City from "../database/models/city";

export const addCity = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const checkCity = await City.findOne({ where: { name: name } });
    if (!checkCity) {
      return res.status(404).json({ error: "City already added" });
    }
    const city = await City.create({ name });
    return res.status(200).json({ city });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

export const updateCity = async (req: any, res: any) => {
  try {
    const cityId = req.query.cityId;
    const { name } = req.body;
    const city = await City.findOne({ where: { id: cityId } });
    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }
    city.name = name;
    await city.save();

    // Return a success response
    return res.status(200).json({ message: "City updated successfully", city });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
