"use strict";

const name = "Postcontent";
const tableName = "postcontent";

const selectableProps = ["title", "content"];

module.exports = knex => {
  const create = props =>
    knex
      .insert(props)
      .into(tableName)
      .timeout(1000);

  const findAll = () =>
    knex
      .select()
      .from(tableName)
      .timeout(1000);

  const findById = id =>
    knex
      .select(selectableProps)
      .from(tableName)
      .where({ id })
      .timeout(1000);

  const update = props =>
    knex
      .update(props)
      .from(tableName)
      .where({ id: props.id })
      .timeout(1000);

  const destroy = id =>
    knex
      .del()
      .from(tableName)
      .where({ id })
      .timeout(1000);

  return {
    name,
    tableName,
    create,
    findAll,
    findById,
    update,
    destroy
  };
};
