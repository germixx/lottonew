const mongoDB = require('../../../../../../util/mongodb')

const insertLineIntoDB = async (line, date, session) => {
    return new Promise((resolve, reject) => {

        if(session =='eve'){
            
            mongoDB.collection("official").updateOne({ sessionDate: date }, { $set: { "games.fantasy5.eve.predictions": line } }, function (err, result) {

                if (err) throw err;
    
                if (result !== null) {
                    
                    resolve({ status: true, data: result })
                } else {
                    resolve({ status: false, data: result })
                }
    
            })
        }

        if(session == 'mid') {
            mongoDB.collection("official").updateOne({ sessionDate: date }, { $set: { "games.fantasy5.midday.predictions": line } }, function (err, result) {

                if (err) throw err;
    
                if (result !== null) {
                    resolve({ status: true, data: result })
                } else {
                    resolve({ status: false, data: result })
                }
    
            })
        }

        return { status: true }
    })
}

export async function GET(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
}
  
export async function POST(request, res) {

    let REQ = await request.json();

    const lineObj = REQ.newLines;

    const dayte = REQ.dayte;

    const session = REQ.session;

    let result = await insertLineIntoDB(lineObj, dayte, session);

    return Response.json({ status: result }, { status: 200});
}
  
export async function PUT(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
}