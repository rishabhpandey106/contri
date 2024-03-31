import React from 'react'
import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/app/dbConfig/dbConfig';
import Users from '@/app/model/userSchema';
import jsonfile from 'jsonfile'
import moment from 'moment';
import simpleGit from 'simple-git';
import { random } from 'lodash';

export async function POST(NextRequest) {
    try {
        const reqBody = await NextRequest.json();
        const { email, quantity } = reqBody;

        console.log(reqBody);

        const data = new Users ({
            email: email,
            quantity: quantity
        })

        await data.save();

        console.log("saved in database")

        await makecommit(quantity);

        return NextResponse.json({ message: `user contributed ${email} with quantity ${quantity}` }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

const makecommit = n => {
    if(n === 0) return simpleGit().push('origin','master');
    
    const PATH = ('../../git/contri/src/app/json/contributions.json')
    const x = random(0, 10);
    const y = random(0, 10);
    const date = moment().subtract(8 , "w").add(x , "d").add(y , "d").format();
    console.log(PATH)

    const newData = {
        date: date
    };

    jsonfile.writeFile(PATH , newData);

    console.log(date);

    simpleGit().add(["src/app/json/contributions.json"]).commit(date, {"--date": date}, makecommit.bind(this , --n));
}

connect();
