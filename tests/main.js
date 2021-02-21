import {assert} from 'chai';
import {Tasks} from '/imports/api/tasks'
import {create} from '../imports/api/tasks/methods/create';
import {get} from '../imports/api/tasks/methods/get';

describe('Testing create() method', function() {
  beforeEach(() => Tasks.remove({title: "testTask"}))
  it('Should create a task', () => {
    create({title: "testTask"})
    const retrievedTask = Tasks.find({title: "testTask"}).fetch()
    assert.isArray(retrievedTask, 'Mongo find method did not return an array')
    assert.isNotEmpty(retrievedTask, "Retrieved array is empty")
    assert.include(retrievedTask[0], {title: "testTask"})
  });
});

describe('Testing get() method', function() {
  it('Should retrieve a list of tasks', () => {
    const fetchedTasks = get()
    assert.isArray(fetchedTasks, 'Mongo find method did not return an array')
    if(fetchedTasks.length>0) {
      assert.property(fetchedTasks[0], "title", "Fetched array does not contain tasks")
    }
  });
});

