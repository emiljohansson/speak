const exec = require('child_process').exec

function noop () {}

module.exports = (string, cb, cmd) => {
  if (!cmd) {
    say(string, cb)
    return
  }
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
    }
    say(stdout, noop)
  })
}

function say (string, cb) {
  console.log(string)
  exec('say "' + string + '"', (err, stdout, stderr) => {
    if (err) {
      console.log(err)
    }
    if (cb) {
      cb()
    }
  })
}
