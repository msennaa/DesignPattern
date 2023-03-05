import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabase = MyDatabaseModule;
// const myDatabase = MyDatabaseFunction
// const myDatabase = MyDatabaseClassic.instance;

myDatabase.add({ name: 'Matheus', age: 28 });
myDatabase.add({ name: 'Brennda', age: 27 });
myDatabase.add({ name: 'Vinicio', age: 28 });
myDatabase.show();

export { myDatabase }