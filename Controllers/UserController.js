import User from "../Models/User.js";

const UserController = {
  getList: async (req, res) => {
    try {
      const users = await User.find(); // שליפת כל המשתמשים
      const filtered1 = await User.find({ isComplete: true }); // סינון 1
      const filtered2 = await User.where('isComplete', false); // סינון 2
      res.json({ users, filtered1, filtered2 });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id); // שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { _id, name, email, password, links, isComplete } = req.body;
    try {
      const newUser = await User.create({ _id, name, email, password, links, isComplete }); // הוספת חדש
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      }); // עדכון לפי מזהה
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await User.findByIdAndDelete(id); // מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UserController