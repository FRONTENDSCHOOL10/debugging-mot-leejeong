/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mx1b7884ihv68mi",
    "created": "2024-07-16 08:33:45.314Z",
    "updated": "2024-07-16 08:33:45.314Z",
    "name": "main_quick",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cua2clcp",
        "name": "quickThumbnail",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "1225jq8i",
        "name": "quickTitle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ly3mzjyq",
        "name": "quickEpisode",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mx1b7884ihv68mi");

  return dao.deleteCollection(collection);
})
