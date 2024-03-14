import Region from "../database/models/region";
import City from "../database/models/city";

export const addRegion = async (req: any, res: any) => {
  const { cityId, regionName } = req.body;

  const checkRegion = await Region.findOne({ where: { name: regionName } });
  if (!checkRegion) {
    return res.status(404).json({ error: "Region already added" });
  }
  const region = await Region.create({ name: regionName, cityId: cityId });
  return res.status(200).json({ region });
};
