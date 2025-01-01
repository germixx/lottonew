import { promises as fs } from 'fs';

// Check mongo session to see if Fantasy OR Lotto numbers have been drawn for current date 
// and the new session can be created
export async function POST(request, res) {

    let REQ = await request.json();
    
    if (REQ.string == 'axlpoeushdngtuesl') {
        
        const F5dayDataStr = await fs.readFile(process.cwd() + '/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/data/Fantasy5Day.py', 'utf8');
        const F5eveDataStr = await fs.readFile(process.cwd() + '/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/data/Fantasy5Eve.py', 'utf8');

        const F5dayDataJson = JSON.parse(F5dayDataStr);
        const F5eveDataJson = JSON.parse(F5eveDataStr);

        if (F5dayDataJson.date === F5eveDataJson.date) {
            return Response.json({status: true, message: 'Dates are matching'});
        } else {
            return Response.json({status: false, message: 'Dates not matching'});
        }

    } else {
        return Response.json({ status: false, message: 'No correct string' });
    }

}

export async function GET(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
}

export async function PUT(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
}