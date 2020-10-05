To create a local cron job (this example uses crontab) that runs audit.sh and audit.performance.sh, you will need to globally install Lighthouse:

```sh
npm install -g lighthouse
```

For the crontab script, first get your path variable so that your crontab job will have access to your copy of Node:

```sh
echo $PATH
```

Then set this path variable locally in the crontab file. The below example runs `audit.sh` every Sunday at 10am and `audit.performance.sh` every Sunday at 10:05am.

```sh
#!/bin/bash
PATH=#add path value here

0 10 * * SUN cd /path/to/repo && /bin/bash ./sh/audit.sh
5 10 * * SUN cd /path/to/repo && /bin/bash ./sh/audit.performance.sh

```

Make sure there is a newline at the end of the crontab file.

You may also need to run `chmod +x audit.sh` and `chmod +x audit.performance.sh` so that the scripts are executable.

For recent Mac operating systems, you may also need to grant `cron` full disk access. See [these instructions](https://apple.stackexchange.com/a/378558/314170).