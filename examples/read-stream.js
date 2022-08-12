// const exiftoolBin = require('dist-exiftool')
const exiftoolBin = require('@logion/exiftool-context').exiftoolBin
const fs = require('fs')
const path = require('path')
const exiftool =  require('../')

const ep = new exiftool.ExiftoolProcess(exiftoolBin)
ep.open()
    .then(() => {
        const rs = fs.createReadStream(path.join(__dirname, '28.jpg'))
        return ep.readMetadata(rs, ['-File:all'])
    })
    .then((res) => {
        console.log(res)
    })
    .then(() => ep.close(), () => ep.close())
    .catch(console.error)
