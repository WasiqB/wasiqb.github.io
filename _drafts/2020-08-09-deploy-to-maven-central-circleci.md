---
title: Deploy to Maven Central from CircleCI workflow
---

# Why require deployment job on CircleCI workflow?

With my past experience, deployment to Maven central is a very tedious task and it is also restricted to a single person out of all the contributors. To make the deployment more accessible and remove dependency from any person, a deployment job is more logical where any person with proper rights in CircleCI can approve the deployment job and the rest is handled seamlessly by the job.

# How to setup pipeline to enable deployment of JAR's?

## Create GPG keys

## Create SSH keys

# CircleCI Environment variables settings

## Organization Context settings

To share common environment variables across projects under the organization, new context is required to be created.

New context can be created by navigating to,

`CircleCI dashboard -> Organization Settings -> Context -> Create Context`

Give some good name to the context.

### `GITHUB_FINGERPRINT`

Get the GitHub key from their server.

```shell_script
> ssh-keyscan github.com >> githubKey
```

Verify the fingerprint of GitHub by verifying the output of below command with this published [GitHub fingerprint](https://docs.github.com/en/github/authenticating-to-github/githubs-ssh-key-fingerprints).

```shell_script
> ssh-keygen -lf githubKey
```

Add the content of the file you just created `githubKey` to CircleCI environment variable in context with key `GITHUB_FINGERPRINT`.

### `GITHUB_USER_NAME`

This will be your GitHub user name.

### `GITHUB_USER_EMAIL`

This will be your Email associated with GitHub.

### `GPG_SIGNING_KEY`

This will be your GPG key.

### `GPG_PASSPHRASE`

This will be your GPG key passphrase.

### `SECRING_GPG_ASC_BASE64`

Save your GPG public key in file.

```shell_script
> gpg --output public.pgp --armor --export <your-email>@gmail.com
```

And save your GPG private key in file.

```shell_script
> gpg --output private.pgp --armor --export-secret-key <your-email>@gmail.com
```

Now convert your private key to base64 string.

```shell_script
> base64 -i private.pgp -o gpg-sec.txt
```

Copy the content of `gpg-sec.txt` and add it to environment variable in CircleCI context with key `SECRING_GPG_ASC_BASE64`.

### `SERVER_OSSRH_USERNAME`

This is the login username which is used to login to OSS Sonatype Jira portal.

### `SERVER_OSSRH_PASSWORD`

This is the login password which is used to login to OSS Sonatype Jira portal.

## Project specific Environment variables

### `GITHUB_COMMIT_KEY`

Create a new SSH key for each repository with command,

```shell_script
> ssh-keygen -t rsa -b 4096 -C "<your-email>@gmail.com"
```

> Make sure not to set a password.

While key generation, 2 files will get created at the path which you specified. Example `id_rsa` and `id_rsa.pub`.

You need to copy paste the content of `id_rsa.pub` to your GitHub repository settings under `Deploy keys` in a new key.

You must now convert your private key `id_rsa` and convert to Base64 string.

```shell_script
> base64 -i path/to/id_rsa -o ssh-key.txt
```

Now take the content from `ssh-key.txt` and paste it in CircleCI environment variable for the corresponding project for our repository with key `GITHUB_COMMIT_KEY`.