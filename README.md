---
description: 'japidb is an easy, improved way to implement offline storage at your web app.'
---

# Getting Started

japidb is an easy and improved way to implement offline storage at your web apps. Forget about localstorage, do not worry, and use japi.

```text
npm i -s japidb
```

japidb has 3 types of storage, `Collection`, `Bulb`, and `Item`.

`Collection` are the analogous of tables. You can store multiple `documents` over there. \(Like rows in sql and documents at mongo\)

```javascript
import { Collection } from 'https://cdn.skypack.dev/japidb';
	
  const task = new Collection('Task', 'id');
  
  task.save({
  	'id': 1,
    'task' : 'Code japidb',
    'done': true
  })
  
  task.save({
  	'id' : 2,
    'task' : 'Publish japidb',
    'done': false
  })
  
  const tasks = task.find()
  
  console.log(tasks)
```

Let's see whats going on there,

To define a new `collection`, you need to initialize the Collection object, the first parameter is the name of the collection and the second one, the field that is going to work as primary key.

```javascript
const task = new Collection('Task', 'id');
```

Then, in order to add new `documents` to the collection, \(like an insert into at sql\), you just need to call the save method.

```javascript
task.save({
	'id': 1,
  'task' : 'Code japidb',
  done: true
})
  
task.save({
	'id' : 2,
  'task' : 'Publish japidb',
  done: false
})
```

This will add two `documents` to your `collections`.  It is important to say that if the document already exist \(based on the id Field provided\), the document will be updated.

In order to get all the documents in your collection,  you can use de find method.

```javascript
const tasks = task.find()
```

You can use the find method with parameters in order to add some filters to the data.

```javascript
const tasks = task.find({
	'done': true
})
```

This will retrieve all the `tasks` in which `done` is equal `true`.

```javascript
//printing tasks
[{
  done: true,
  id: 1,
  task: "Code japidb"
}]
```



