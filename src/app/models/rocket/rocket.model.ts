export class RocketModel {
  constructor(
    public id?: string,
    public name?: string,
    public type?: string,
    public flickr_images?: Array<string>,
    public height?: Height,
    public diameter?: Diameter,
    public mass?: Mass,
  ) { }
}

class Height {
  constructor(
    public meters?: string,
    public feet?: string,
  ) { }
}
class Diameter {
  constructor(
    public meters?: string,
    public feet?: string,
  ) { }
}
class Mass {
  constructor(
    public kg?: string,
    public lb?: string,
  ) { }
}
