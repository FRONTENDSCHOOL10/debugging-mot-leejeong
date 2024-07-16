/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8w6hv38b1zcoopw")

  collection.name = "banners"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8w6hv38b1zcoopw")

  collection.name = "banner"

  return dao.saveCollection(collection)
})
