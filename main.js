//Bot para WhatsApp creado por Samu... Si vas a modificar no quites creditos, GRACIAS!!
let { WAConnection: _WAConnection, WA_MESSAGE_STUB_TYPES } = require('@adiwajshing/baileys')
let { generate } = require('qrcode-terminal')
let qrcode = require('qrcode')
let simple = require('./lib/simple')
let logs = require('./lib/logs')
let yargs = require('yargs/yargs')
let syntaxerror = require('syntax-error')
let fetch = require('node-fetch')
let chalk = require('chalk')
let fs = require('fs')
let path = require('path')
let util = require('util')
let { spawnSync } = require('child_process')
let WAConnection = simple.WAConnection(_WAConnection)

global.owner = ['529984907794@s.whatsapp.net'] // Tu numero aqui
global.mods = ['529984907794@s.whatsapp.net'] 
global.prems = ['529984907794@s.whatsapp.net']
