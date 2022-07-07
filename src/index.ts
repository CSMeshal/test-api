// function x() {}
// import {Book } from '@prisma/client';

require('dotenv').config();
const Discord = require('discord.js')

import { connectDb, prismaClient } from './prisma';
import { listen } from './server';

async function start() {
	await connectDb();
	listen();
}
start();