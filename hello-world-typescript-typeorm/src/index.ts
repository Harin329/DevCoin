import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { UserMapping } from "./entity/User";

const express = require('express')
const app = express()



app.use(express.json());
app.post('/updateUser', async (req, res) => {
  console.log(req.body);
  const {github_id, network_address} = req.body;

  const userRepository = await getRepository(UserMapping);
  const user = await updateUser(userRepository, github_id, network_address);
  res.json(user);
})

app.get('/userMapping', async (req, res) => {
  const userRepository = await getRepository(UserMapping);
  const data = await getUserMapping(userRepository);
  res.json(data);
})

async function getUserMapping(repository) {
    const data = await repository.find({
      order: {
        github_id: "ASC",
      }
    });
    return data
}

async function updateUser(repository, github_id: string, network_address: string) {
    let userExist = await repository.findOne(github_id);
    console.log(userExist);

    if (userExist) {
        console.log("User already exists")
        userExist.network_address = network_address
        userExist = await repository.save(userExist);
        return userExist;
    } else {
        console.log("Inserting a new user into the database...");
        let user = new UserMapping();
        user.github_id = github_id;
        user.network_address = network_address;
        await repository.save(user);
        console.log("Saved a new User.");
        return user;
    }
}

const PORT=7000;
app.listen(PORT,()=>{
  createConnection()
  .then(async (connection) => {console.log('Connection Created')})
  .catch((error) => console.log(error));
  console.log(`Server is up and running at the port ${PORT}`)
})


// Other useful functions to look for writing queries
// async function insertAccount(repository, id: number, balance: number) {
//   console.log("Inserting a new account into the database...");

//   let account = new Account();
//   account.id = id;
//   account.balance = balance;

//   await repository.save(account);

//   console.log("Saved a new account.");
// }

// async function printBalance(repository, id: number) {
//   console.log("Printing balances from account " + id + ".");

//   const account = await repository.findOne(id);

//   console.log(account);
// }

// async function transferFunds(
//   repository,
//   amount: number,
//   from: number,
//   to: number
// ) {
//   console.log(`Transferring ${amount} from account ${from} to account ${to}.`);

//   let accountFrom = await repository.findOne(from);
//   accountFrom.balance = accountFrom.balance - amount;
//   await repository.save(accountFrom);

//   let accountTo = await repository.findOne(to);
//   accountTo.balance = accountTo.balance + amount;
//   await repository.save(accountTo);

//   console.log("Transfer complete.");
// }


//TODO: Setup Cockroach DB
