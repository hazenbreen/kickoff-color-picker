import knex from "../../clients/knex";

export default async (req, res) => {
  if (req.method === "GET") {
    const palette = await knex("palettes");

    res.status(200).json(palette);
  } else if (req.method === "POST") {
    await knex("palettes")
      .insert({ 
        color1: req.body.color1,
        color2: req.body.color2,
        color3: req.body.color3,
        color4: req.body.color4,
        color5: req.body.color5
       });

    res.status(200).send()
  } else if (req.method === "DELETE") {
    await knex("palettes")
      .where("id", req.query.id)
      .del()

    res.status(200).send();
  } else {
    res.status(404).json({ error: `${req.method} endpoint does not exist` });
  }
};
