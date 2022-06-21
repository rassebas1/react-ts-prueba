 import axios from 'axios';
 

 export interface Clan {
    badgeUrls: {
        small: string;
        medium: string;
        large: string;
    };
    clanLevel: number;
    clanPoints: number;
    clanVersusPoints: number;
    isWarLogPublic: boolean;
    labels: [{
        iconUrls: {
            small: string;
            medium: string;
        };
        id: number;
        name: string;
    }];
    location: {
        id: number;
        name: string;
        isCountry: boolean;
        
    };
    members: number;
    name: string;
    requiredTownhallLevel: number;
    requiredTrophies: number;
    requiredVersusTrophies: number;
    tag: string;
    type: string;
    warFrequency: string;
    warLeague: {
        id: number;
        name: string;
    };
    warLosses: number;
    warTies: number;
    warWinStreak: number;
    warWins: number;
}
export class ClanService{
    private API_URL=import.meta.env.VITE_MY_PROXY   ;
    private API_KEY=import.meta.env.VITE_APP_API_TOKEN;


    /**
     *VITE_API_URL="https://api.clashofclans.com/v1/clans"
     */
    ClanService() {
        axios.defaults.baseURL = import.meta.env.VITE_MY_PROXY   ;
        ;
    }
    public searchClan=async(name:string)=>{
        
        const response=await axios.get(`/${name}`,{
            baseURL:this.API_URL,
        });
        return response.data.items as Array<Clan>;
    }
    public getClanById = async () => {
        const response = await axios.get("/",{
            baseURL:this.API_URL,
        })           
        return response.data.items as Array<Clan>
    }
}   
