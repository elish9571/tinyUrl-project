import express from 'express';
import Link from '../Models/Link.js';
const router = express.Router();

router.get('/:id', async (req, res) => {
  const linkId = req.params.id;
  const targetParamValue = req.query.t;

  try {
    const link = await Link.findById(linkId);
    if (!link) {
      return res.status(404).send('Link not found');
    }

    // שמירת קליק
    const click = {
      ipAddress: req.ip,
      targetParamValue: targetParamValue || ""
    };
    link.clicks.push(click);
    await link.save();

    // ביצוע הפניה מחדש
    res.redirect(link.originalUrl);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

export default router;
