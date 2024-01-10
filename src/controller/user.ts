import User from "../database/models/user";

export const addUser = async (req: any, res: any) => {
  try {
    const { name, cityId, phoneNo } = req.body;
    console.log("addUser");

    const user = await User.create({ name, cityId, phoneNo });
    return res.status(201).json({ user });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
