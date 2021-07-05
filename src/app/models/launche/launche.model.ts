export class LauncheModel {
  constructor(
    public id?: string,
    public launch_library_id?: string,
    public launchpad?: string,
    public date_local?: string,
    public date_precision?: string,
    public date_unix?: number,
    public date_utc?: string,
    public flight_number?: string,
    public name?: string,
    public net?: boolean,
    public details?: string,
    public payloads?: Array<string>,
    public crew?: Array<string>,
    public rocket?: string,
    public success?: string,
    public upcoming?: string,
    public fairings?: string,
    public links?: Link,
  ) { }
}
class Link {
  constructor(
    public article?: string,
    public flickr?: Flickr,
    public patch?: Patch,
    public reddit?: Reddit,
    public presskit?: string,
    public webcast?: string,
    public wikipedia?: string,
    public youtube_id?: string,
  ) { }
}
class Flickr {
  constructor(
    public original?: Array<any>,
    public small?: Array<any>,
  ) { }
}
class Patch {
  constructor(
    public large?: string,
    public small?: string,
  ) { }
}
class Reddit {
  constructor(
    public campaign?: string,
    public launch?: string,
    public media?: string,
    public recovery?: string,
  ) { }
}