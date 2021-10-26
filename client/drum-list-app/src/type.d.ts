interface IDrummer {
    id: number
    description: string
    marks: string
    styles: string
    nationality: string
    name: string
    idVideo: string
  }

interface IDrummers{
    drummers: IDrummer[]
}

  type DrummerProps = {
    drummer: IDrummer
  }
