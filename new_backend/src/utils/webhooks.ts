// import { Octokit } from "octokit"

// const octokit = new Octokit({
//   auth: process.env.GITHUB_TOKEN as string
// })
// const fetchPushData = async()=>{
//     await octokit.request('POST /repos/{owner}/{repo}/hooks', {
//     owner: 'Demzi',
//     repo: 'TestingWebHooks',
//     name: 'web',
//     active: true,
//     events: [
//         'push',
        
//     ],
//     config: {
//         url: 'https://1a63e9dfd249.ngrok-free.app',
//         content_type: 'json',
//         insecure_ssl: '0'
//     },
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
//     })

// }