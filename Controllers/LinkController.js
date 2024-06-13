import Link from "../Models/Link.js";

const LinkController = {
  getList: async (req, res) => {
    try {
      const links = await Link.find(); // No filtering
      const completeLinks = await Link.find({ isComplete: true }); // Filtering by complete status
      const incompleteLinks = await Link.where('isComplete', false); // Filtering by incomplete status
      res.json({ links, completeLinks, incompleteLinks });
    } catch (e) {
      res.status(400).json();
    }
  },

  getById: async (req, res) => {
    try {
      const link = await Link.findById(req.params.id); // Retrieving by ID
      res.json(link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { name, originalUrl, isComplete } = req.body;
    try {
      const newLink = await Link.create({ name, originalUrl, isComplete }); // Adding new link
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await Link.findByIdAndUpdate(id, req.body, {
        new: true,
      }); // Update by ID
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedLink = await Link.findByIdAndDelete(id); // Deletion by ID
      res.json(deletedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
   getClicksReport : async (req, res) => {
    const linkId = req.params.id;
    try {
        const link = await Link.findById(linkId);
        if (!link) {
            return res.status(404).send('Link not found');
        }

        const report = {};

        link.clicks.forEach(click => {
            const target = click.targetParamValue || 'unknown';
            if (!report[target]) {
                report[target] = 0;
            }
            report[target]++;
        });

        res.json(report);
    } catch (err) {
        res.status(500).send('Server error');
    }
}
};

export default LinkController;
