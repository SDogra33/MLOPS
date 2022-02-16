// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //hostUrl:'https://9b0c6nz346.execute-api.us-east-1.amazonaws.com/test/predictresumescreener',
  hostUrl:'https://9b0c6nz346.execute-api.us-east-1.amazonaws.com/test/predictresume',
  jobDescriptionUrl:'https://x379zylveh.execute-api.us-east-1.amazonaws.com/dev/file-upload',
  resumeUploadUrl:'https://x379zylveh.execute-api.us-east-1.amazonaws.com/dev/resume-upload',
  retriveResumeFromS3:'https://x379zylveh.execute-api.us-east-1.amazonaws.com/dev/retrive'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
