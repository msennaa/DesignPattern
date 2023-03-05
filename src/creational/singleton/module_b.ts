import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabase = MyDatabaseModule;
// const myDatabase = MyDatabaseFunction
// const myDatabase = MyDatabaseClassic.instance;

myDatabase.add({ name: 'Luiz', age: 28 });
myDatabase.add({ name: 'Arlina', age: 17 });
myDatabase.add({ name: 'Pedro', age: 58 });
myDatabase.show();

export { myDatabase }