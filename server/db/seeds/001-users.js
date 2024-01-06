/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { user_name: 'taro', age: 20 },
    { user_name: 'jiro', age: 15 },
    { user_name: 'saburo', age: 10 },
  ]);
};
