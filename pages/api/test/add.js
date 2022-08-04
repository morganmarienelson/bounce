import connectMongo from '../../../utlils/connectMongo'
import Test from '../../../models/testModel'

export default async function addTest(req, res){
  const {name, email } = req.body;
  console.log("connecting to mongo");
  await connectMongo();
  console.log("connected to mongo");
  console.log("creating document");
  const test = await Test.create(req.body);
    console.log("created document");

    res.json(test);
}