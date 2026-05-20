export interface Specialist {
    initials: string
    name: string
    specialty: string
    bgColor: string
    todayCount: number
    mrr: string
    fillRate: number
    status: 'Aktif' | 'İzinli' | 'Pasif'
  }
  
  export interface HeatmapRow {
    specialist: Pick<Specialist, 'initials' | 'name' | 'bgColor'>
    slots: number[]
  }
  
  export interface TodayAppointment {
    initials: string
    specialistName: string
    clientName: string
    time: string
    bgColor: string
    badges: { text: string; color: string }[]
  }
  
  export interface TopPerformer {
    rank: string
    initials: string
    name: string
    bgColor: string
    stats: string
  }