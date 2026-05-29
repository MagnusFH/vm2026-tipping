import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Users, 
  Calendar, 
  Settings, 
  CheckCircle, 
  ChevronRight, 
  AlertCircle, 
  Save, 
  Share2, 
  Info, 
  List, 
  User, 
  Phone, 
  TrendingUp,
  Award,
  FileText,
  Trash2,
  Sparkles,
  CloudLightning,
  RefreshCw,
  Clock,
  ChevronDown,
  Lock,
  Globe
} from 'lucide-react';

// Full specifications of the 12 Groups (A to L)
const GROUPS_DATA = {
  A: {
    teams: ['Sør-Afrika', 'Mexico', 'Sør-Korea', 'Tsjekkia'],
    matches: [
      { id: 'A1', date: '11. jun', home: 'Mexico', away: 'Sør-Afrika' },
      { id: 'A2', date: '12. jun', home: 'Sør-Korea', away: 'Tsjekkia' },
      { id: 'A3', date: '18. jun', home: 'Tsjekkia', away: 'Sør-Afrika' },
      { id: 'A4', date: '19. jun', home: 'Mexico', away: 'Sør-Korea' },
      { id: 'A5', date: '25. jun', home: 'Tsjekkia', away: 'Mexico' },
      { id: 'A6', date: '25. jun', home: 'Sør-Afrika', away: 'Sør-Korea' }
    ]
  },
  B: {
    teams: ['Canada', 'Bosnia-Hercegovina', 'Qatar', 'Sveits'],
    matches: [
      { id: 'B1', date: '12. jun', home: 'Canada', away: 'Bosnia-Hercegovina' },
      { id: 'B2', date: '13. jun', home: 'Qatar', away: 'Sveits' },
      { id: 'B3', date: '18. jun', home: 'Sveits', away: 'Bosnia-Hercegovina' },
      { id: 'B4', date: '19. jun', home: 'Canada', away: 'Qatar' },
      { id: 'B5', date: '24. jun', home: 'Sveits', away: 'Canada' },
      { id: 'B6', date: '24. jun', home: 'Bosnia-Hercegovina', away: 'Qatar' }
    ]
  },
  C: {
    teams: ['Brasil', 'Marokko', 'Haiti', 'Skottland'],
    matches: [
      { id: 'C1', date: '13. jun', home: 'Brasil', away: 'Marokko' },
      { id: 'C2', date: '14. jun', home: 'Haiti', away: 'Skottland' },
      { id: 'C3', date: '20. jun', home: 'Skottland', away: 'Marokko' },
      { id: 'C4', date: '20. jun', home: 'Brasil', away: 'Haiti' },
      { id: 'C5', date: '25. jun', home: 'Skottland', away: 'Brasil' },
      { id: 'C6', date: '25. jun', home: 'Marokko', away: 'Haiti' }
    ]
  },
  D: {
    teams: ['Paraguay', 'USA', 'Australia', 'Tyrkia'],
    matches: [
      { id: 'D1', date: '13. jun', home: 'USA', away: 'Paraguay' },
      { id: 'D2', date: '14. jun', home: 'Australia', away: 'Tyrkia' },
      { id: 'D3', date: '19. jun', home: 'USA', away: 'Australia' },
      { id: 'D4', date: '20. jun', home: 'Tyrkia', away: 'Paraguay' },
      { id: 'D5', date: '26. jun', home: 'Tyrkia', away: 'USA' },
      { id: 'D6', date: '26. jun', home: 'Paraguay', away: 'Australia' }
    ]
  },
  E: {
    teams: ['Curaçao', 'Tyskland', 'Elfenbenskysten', 'Ecuador'],
    matches: [
      { id: 'E1', date: '14. jun', home: 'Tyskland', away: 'Curaçao' },
      { id: 'E2', date: '15. jun', home: 'Elfenbenskysten', away: 'Ecuador' },
      { id: 'E3', date: '20. jun', home: 'Tyskland', away: 'Elfenbenskysten' },
      { id: 'E4', date: '21. jun', home: 'Ecuador', away: 'Curaçao' },
      { id: 'E5', date: '25. jun', home: 'Curaçao', away: 'Elfenbenskysten' },
      { id: 'E6', date: '25. jun', home: 'Ecuador', away: 'Tyskland' }
    ]
  },
  F: {
    teams: ['Nederland', 'Japan', 'Tunisia', 'Sverige'],
    matches: [
      { id: 'F1', date: '14. jun', home: 'Nederland', away: 'Japan' },
      { id: 'F2', date: '15. jun', home: 'Sverige', away: 'Tunisia' },
      { id: 'F3', date: '20. jun', home: 'Nederland', away: 'Sverige' },
      { id: 'F4', date: '21. jun', home: 'Tunisia', away: 'Japan' },
      { id: 'F5', date: '26. jun', home: 'Tunisia', away: 'Nederland' },
      { id: 'F6', date: '26. jun', home: 'Japan', away: 'Sverige' }
    ]
  },
  G: {
    teams: ['Belgia', 'Iran', 'Egypt', 'New Zealand'],
    matches: [
      { id: 'G1', date: '15. jun', home: 'Belgia', away: 'Iran' },
      { id: 'G2', date: '16. jun', home: 'Egypt', away: 'New Zealand' },
      { id: 'G3', date: '21. jun', home: 'Belgia', away: 'Egypt' },
      { id: 'G4', date: '22. jun', home: 'New Zealand', away: 'Iran' },
      { id: 'G5', date: '27. jun', home: 'Egypt', away: 'Iran' },
      { id: 'G6', date: '27. jun', home: 'New Zealand', away: 'Belgia' }
    ]
  },
  H: {
    teams: ['Spania', 'Kapp Verde', 'Saudi Arabia', 'Uruguay'],
    matches: [
      { id: 'H1', date: '15. jun', home: 'Spania', away: 'Kapp Verde' },
      { id: 'H2', date: '16. jun', home: 'Saudi Arabia', away: 'Uruguay' },
      { id: 'H3', date: '21. jun', home: 'Spania', away: 'Saudi Arabia' },
      { id: 'H4', date: '22. jun', home: 'Uruguay', away: 'Kapp Verde' },
      { id: 'H5', date: '27. jun', home: 'Kapp Verde', away: 'Saudi Arabia' },
      { id: 'H6', date: '27. jun', home: 'Uruguay', away: 'Spania' }
    ]
  },
  I: {
    teams: ['Frankrike', 'Senegal', 'Irak', 'Norge'],
    matches: [
      { id: 'I1', date: '16. jun', home: 'Frankrike', away: 'Senegal' },
      { id: 'I2', date: '17. jun', home: 'Irak', away: 'Norge' },
      { id: 'I3', date: '22. jun', home: 'Frankrike', away: 'Irak' },
      { id: 'I4', date: '23. jun', home: 'Norge', away: 'Senegal' },
      { id: 'I5', date: '26. jun', home: 'Norge', away: 'Frankrike' },
      { id: 'I6', date: '26. jun', home: 'Senegal', away: 'Irak' }
    ]
  },
  J: {
    teams: ['Argentina', 'Algerie', 'Østerrike', 'Jordan'],
    matches: [
      { id: 'J1', date: '17. jun', home: 'Argentina', away: 'Algerie' },
      { id: 'J2', date: '17. jun', home: 'Østerrike', away: 'Jordan' },
      { id: 'J3', date: '22. jun', home: 'Argentina', away: 'Østerrike' },
      { id: 'J4', date: '23. jun', home: 'Jordan', away: 'Algerie' },
      { id: 'J5', date: '28. jun', home: 'Algerie', away: 'Østerrike' },
      { id: 'J6', date: '28. jun', home: 'Jordan', away: 'Argentina' }
    ]
  },
  K: {
    teams: ['Portugal', 'DR Kongo', 'Usbekistan', 'Colombia'],
    matches: [
      { id: 'K1', date: '17. jun', home: 'Portugal', away: 'DR Kongo' },
      { id: 'K2', date: '18. jun', home: 'Usbekistan', away: 'Colombia' },
      { id: 'K3', date: '23. jun', home: 'Portugal', away: 'Usbekistan' },
      { id: 'K4', date: '24. jun', home: 'Colombia', away: 'DR Kongo' },
      { id: 'K5', date: '28. jun', home: 'Colombia', away: 'Portugal' },
      { id: 'K6', date: '28. jun', home: 'DR Kongo', away: 'Usbekistan' }
    ]
  },
  L: {
    teams: ['England', 'Kroatia', 'Ghana', 'Panama'],
    matches: [
      { id: 'L1', date: '17. jun', home: 'England', away: 'Kroatia' },
      { id: 'L2', date: '18. jun', home: 'Ghana', away: 'Panama' },
      { id: 'L3', date: '23. jun', home: 'England', away: 'Ghana' },
      { id: 'L4', date: '24. jun', home: 'Panama', away: 'Kroatia' },
      { id: 'L5', date: '27. jun', home: 'Panama', away: 'England' },
      { id: 'L6', date: '27. jun', home: 'Kroatia', away: 'Ghana' }
    ]
  }
};

const ALL_TEAMS = Object.values(GROUPS_DATA).flatMap(g => g.teams).sort();

// Translator mapping Norwegian team names from layout to English names in API-FOOTBALL
const TEAM_NAME_MAP = {
  'Sør-Afrika': 'South Africa',
  'Mexico': 'Mexico',
  'Sør-Korea': 'South Korea',
  'Tsjekkia': 'Czech Republic',
  'Canada': 'Canada',
  'Bosnia-Hercegovina': 'Bosnia and Herzegovina',
  'Qatar': 'Qatar',
  'Sveits': 'Switzerland',
  'Brasil': 'Brazil',
  'Marokko': 'Morocco',
  'Haiti': 'Haiti',
  'Skottland': 'Scotland',
  'Paraguay': 'Paraguay',
  'USA': 'USA',
  'Australia': 'Australia',
  'Tyrkia': 'Turkey',
  'Curaçao': 'Curacao',
  'Tyskland': 'Germany',
  'Elfenbenskysten': 'Ivory Coast',
  'Ecuador': 'Ecuador',
  'Nederland': 'Netherlands',
  'Japan': 'Japan',
  'Tunisia': 'Tunisia',
  'Sverige': 'Sweden',
  'Belgia': 'Belgium',
  'Iran': 'Iran',
  'Egypt': 'Egypt',
  'New Zealand': 'New Zealand',
  'Spania': 'Spain',
  'Kapp Verde': 'Cape Verde',
  'Saudi Arabia': 'Saudi Arabia',
  'Uruguay': 'Uruguay',
  'Frankrike': 'France',
  'Senegal': 'Senegal',
  'Irak': 'Iraq',
  'Norge': 'Norway',
  'Argentina': 'Argentina',
  'Algerie': 'Algeria',
  'Østerrike': 'Austria',
  'Jordan': 'Jordan',
  'Portugal': 'Portugal',
  'DR Kongo': 'Congo DR',
  'Usbekistan': 'Uzbekistan',
  'Colombia': 'Colombia',
  'England': 'England',
  'Kroatia': 'Croatia',
  'Ghana': 'Ghana',
  'Panama': 'Panama'
};

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });
};

export default function App() {
  const [activeTab, setActiveTab] = useState('group-overview');
  const [activeGroup, setActiveGroup] = useState('A');
  const [predictions, setPredictions] = useState({});
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  
  // Knockout predictions
  const [r32, setR32] = useState([]);
  const [r16, setR16] = useState([]);
  const [r8, setR8] = useState([]);
  const [r4, setR4] = useState([]);
  const [r2, setR2] = useState([]);
  const [winner, setWinner] = useState('');
  const [topscorer, setTopscorer] = useState('');

  // App system states
  const [userId, setUserId] = useState('');
  const [notification, setNotification] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isGeneratingClassicPdf, setIsGeneratingClassicPdf] = useState(false);
  const [isSavingToCloud, setIsSavingToCloud] = useState(false);

  // Match results mock database (for the 'Kamper & resultater' view)
  const [actualResults, setActualResults] = useState({
    'A1': { played: true, homeScore: 1, awayScore: 1 },
    'A2': { played: true, homeScore: 2, awayScore: 1 },
    'A3': { played: false, homeScore: 0, awayScore: 0 },
    'A4': { played: false, homeScore: 0, awayScore: 0 },
    'A5': { played: false, homeScore: 0, awayScore: 0 },
    'A6': { played: false, homeScore: 0, awayScore: 0 },
    'B1': { played: true, homeScore: 0, awayScore: 2 },
    'B2': { played: false, homeScore: 0, awayScore: 0 },
    'C1': { played: true, homeScore: 3, awayScore: 0 },
    'C2': { played: true, homeScore: 1, awayScore: 1 }
  });

  // Playoff state sub-tab for results
  const [resultsSubTab, setResultsSubTab] = useState('groups'); // 'groups' or 'playoffs'

  // Actual Playoff Results (for calculating full playoffs in "Poengoversikt")
  const [actualPlayoffs, setActualPlayoffs] = useState({
    r16: ['Mexico', 'Sør-Korea', 'Canada', 'Brasil', 'Haiti'],
    r8: ['Mexico', 'Brasil'],
    r4: ['Brasil'],
    r2: ['Brasil'],
    winner: 'Brasil',
    topscorer: 'Neymar Jr'
  });

  const [editingMatchId, setEditingMatchId] = useState(null);
  const [tempHomeScore, setTempHomeScore] = useState(0);
  const [tempAwayScore, setTempAwayScore] = useState(0);
  const [pointsSearchQuery, setPointsSearchQuery] = useState('');

  // API-FOOTBALL Integration states
  const [apiSettings, setApiSettings] = useState({
    apiKey: '',
    lastSync: 'Aldri synkronisert'
  });
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // --- DERIVED STATES & COUNTS ---
  const totalMatchesPredicted = Object.keys(predictions).length;
  const isKnockoutComplete = r32.length === 32 && r16.length === 16 && r8.length === 8 && r4.length === 4 && r2.length === 2 && winner;

  // Cache loading & Unique Session signature generation
  useEffect(() => {
    // Generate or fetch anonymous browser-unique signature
    let uniqueId = localStorage.getItem('tippekonkurranse_user_id');
    if (!uniqueId) {
      uniqueId = 'user_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
      localStorage.setItem('tippekonkurranse_user_id', uniqueId);
    }
    setUserId(uniqueId);

    const cached = localStorage.getItem('tippekonkurranse_2026_draft');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed.predictions) setPredictions(parsed.predictions);
        if (parsed.userName) setUserName(parsed.userName);
        if (parsed.userPhone) setUserPhone(parsed.userPhone);
        if (parsed.r32) setR32(parsed.r32);
        if (parsed.r16) setR16(parsed.r16);
        if (parsed.r8) setR8(parsed.r8);
        if (parsed.r4) setR4(parsed.r4);
        if (parsed.r2) setR2(parsed.r2);
        if (parsed.winner) setWinner(parsed.winner);
        if (parsed.topscorer) setTopscorer(parsed.topscorer);
      } catch (e) {
        console.error("Error reading cache", e);
      }
    }

    const cachedPlayoffs = localStorage.getItem('tippekonkurranse_2026_actual_playoffs');
    if (cachedPlayoffs) {
      try {
        setActualPlayoffs(JSON.parse(cachedPlayoffs));
      } catch (e) {
        console.error("Error reading actual playoffs cache", e);
      }
    }

    // Load API Settings
    const storedApiKey = localStorage.getItem('tippekonkurranse_api_key') || '';
    const storedLastSync = localStorage.getItem('tippekonkurranse_last_sync_time') || 'Aldri synkronisert';
    setApiSettings({ apiKey: storedApiKey, lastSync: storedLastSync });

    // Fetch initial list of submitted coupons from Netlify Database API
    fetchSubmittedCoupons();
  }, []);

  // Sync draft to local storage on modification
  useEffect(() => {
    const draft = {
      predictions, userName, userPhone,
      r32, r16, r8, r4, r2, winner, topscorer
    };
    localStorage.setItem('tippekonkurranse_2026_draft', JSON.stringify(draft));
  }, [predictions, userName, userPhone, r32, r16, r8, r4, r2, winner, topscorer]);

  // Sync actual playoffs result state to local storage
  useEffect(() => {
    localStorage.setItem('tippekonkurranse_2026_actual_playoffs', JSON.stringify(actualPlayoffs));
  }, [actualPlayoffs]);

  // Daily Scheduler: Automatic sync trigger checking at 10:00 AM CEST
  useEffect(() => {
    if (!apiSettings.apiKey) return;

    const runDailySchedulerCheck = () => {
      const now = new Date();
      const todayStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
      const lastSyncDate = localStorage.getItem('tippekonkurranse_last_sync_date') || '';

      // CEST is UTC+2. Check current hour in CEST timezone
      // Since UTC hours are now.getUTCHours(), CEST is +2.
      const currentCestHour = (now.getUTCHours() + 2) % 24;

      // Trigger automatic sync if it's past 10:00 AM CEST and we haven't synced today
      if (lastSyncDate !== todayStr && currentCestHour >= 10) {
        console.log("Automatic 10:00 AM CEST sync triggered.");
        fetchResultsFromApi(apiSettings.apiKey, todayStr);
      }
    };

    // Run scheduler checks on load and then every 30 minutes
    runDailySchedulerCheck();
    const interval = setInterval(runDailySchedulerCheck, 1800000); 
    return () => clearInterval(interval);
  }, [apiSettings.apiKey]);

  // Fetch Submitted Coupons from Netlify serverless endpoint
  const fetchSubmittedCoupons = async () => {
    try {
      const response = await fetch('/.netlify/functions/get-coupons');
      if (response.ok) {
        const list = await response.json();
        setParticipants(list || []);
      }
    } catch (e) {
      console.warn("Could not retrieve coupons from Netlify. Local preview state will be preserved.", e);
    }
  };

  const showNotification = (msg, type = 'success') => {
    setNotification({ text: msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Safe cascaded transitions when updating knockout states
  const handleR32Change = (updatedR32) => {
    setR32(updatedR32);
    setR16(prev => prev.filter(t => updatedR32.includes(t)));
    setR8(prev => prev.filter(t => updatedR32.includes(t)));
    setR4(prev => prev.filter(t => updatedR32.includes(t)));
    setR2(prev => prev.filter(t => updatedR32.includes(t)));
    if (winner && !updatedR32.includes(winner)) setWinner('');
  };

  const handleR16Change = (updatedR16) => {
    setR16(updatedR16);
    setR8(prev => prev.filter(t => updatedR16.includes(t)));
    setR4(prev => prev.filter(t => updatedR16.includes(t)));
    setR2(prev => prev.filter(t => updatedR16.includes(t)));
    if (winner && !updatedR16.includes(winner)) setWinner('');
  };

  const handleR8Change = (updatedR8) => {
    setR8(updatedR8);
    setR4(prev => prev.filter(t => updatedR8.includes(t)));
    setR2(prev => prev.filter(t => updatedR8.includes(t)));
    if (winner && !updatedR8.includes(winner)) setWinner('');
  };

  const handleR4Change = (updatedR4) => {
    setR4(updatedR4);
    setR2(prev => prev.filter(t => updatedR4.includes(t)));
    if (winner && !updatedR4.includes(winner)) setWinner('');
  };

  const handleR2Change = (updatedR2) => {
    setR2(updatedR2);
    if (winner && !updatedR2.includes(winner)) setWinner('');
  };

  // Safe cascaded transitions when updating actual/official playoffs
  const handleActualR16Change = (updatedR16) => {
    setActualPlayoffs(prev => {
      const nextR8 = (prev.r8 || []).filter(t => updatedR16.includes(t));
      const nextR4 = (prev.r4 || []).filter(t => updatedR16.includes(t));
      const nextR2 = (prev.r2 || []).filter(t => updatedR16.includes(t));
      const nextWinner = updatedR16.includes(prev.winner) ? prev.winner : '';
      return {
        ...prev,
        r16: updatedR16,
        r8: nextR8,
        r4: nextR4,
        r2: nextR2,
        winner: nextWinner
      };
    });
  };

  const handleActualR8Change = (updatedR8) => {
    setActualPlayoffs(prev => {
      const nextR4 = (prev.r4 || []).filter(t => updatedR8.includes(t));
      const nextR2 = (prev.r2 || []).filter(t => updatedR8.includes(t));
      const nextWinner = updatedR8.includes(prev.winner) ? prev.winner : '';
      return {
        ...prev,
        r8: updatedR8,
        r4: nextR4,
        r2: nextR2,
        winner: nextWinner
      };
    });
  };

  const handleActualR4Change = (updatedR4) => {
    setActualPlayoffs(prev => {
      const nextR2 = (prev.r2 || []).filter(t => updatedR4.includes(t));
      const nextWinner = updatedR4.includes(prev.winner) ? prev.winner : '';
      return {
        ...prev,
        r4: updatedR4,
        r2: nextR2,
        winner: nextWinner
      };
    });
  };

  const handleActualR2Change = (updatedR2) => {
    setActualPlayoffs(prev => {
      const nextWinner = updatedR2.includes(prev.winner) ? prev.winner : '';
      return {
        ...prev,
        r2: updatedR2,
        winner: nextWinner
      };
    });
  };

  // Set single match prediction
  const handlePrediction = (matchId, value) => {
    setPredictions(prev => {
      const updated = { ...prev };
      if (updated[matchId] === value) {
        delete updated[matchId];
      } else {
        updated[matchId] = value;
      }
      return updated;
    });
  };

  const clearGroupPredictions = (groupLetter) => {
    const group = GROUPS_DATA[groupLetter];
    setPredictions(prev => {
      const updated = { ...prev };
      group.matches.forEach(m => {
        delete updated[m.id];
      });
      return updated;
    });
    showNotification(`Tips for Gruppe ${groupLetter} ble nullstilt.`, 'info');
  };

  // Helper: Calculate Group Standings
  const calculateGroupTable = (groupLetter) => {
    const group = GROUPS_DATA[groupLetter];
    const standings = {};
    
    group.teams.forEach(team => {
      standings[team] = { name: team, p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 };
    });

    group.matches.forEach(m => {
      const pred = predictions[m.id];
      if (!pred) return;

      standings[m.home].p += 1;
      standings[m.away].p += 1;

      if (pred === 'H') {
        standings[m.home].w += 1;
        standings[m.home].pts += 3;
        standings[m.home].gd += 1;
        standings[m.away].l += 1;
        standings[m.away].gd -= 1;
      } else if (pred === 'B') {
        standings[m.away].w += 1;
        standings[m.away].pts += 3;
        standings[m.away].gd += 1;
        standings[m.home].l += 1;
        standings[m.home].gd -= 1;
      } else if (pred === 'U') {
        standings[m.home].d += 1;
        standings[m.home].pts += 1;
        standings[m.away].d += 1;
        standings[m.away].pts += 1;
      }
    });

    return Object.values(standings).sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      if (b.w !== a.w) return b.w - a.w;
      return a.name.localeCompare(b.name);
    });
  };

  // World Cup 2026: Calculate Third-Placed Teams Live Simulation
  const getThirdPlacedStandings = () => {
    const thirds = [];
    Object.keys(GROUPS_DATA).forEach(g => {
      const table = calculateGroupTable(g);
      if (table[2]) {
        thirds.push({
          group: g,
          ...table[2]
        });
      }
    });
    return thirds.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      if (b.w !== a.w) return b.w - a.w;
      return a.name.localeCompare(b.name);
    });
  };

  // Automatically advance Top 2 from each group + 8 Best 3rd places (Official 2026 Format!)
  const autoFillCompleteR32 = () => {
    const selected = [];
    // 1. Top 2 from all 12 groups (24 teams)
    Object.keys(GROUPS_DATA).forEach(g => {
      const table = calculateGroupTable(g);
      if (table[0]) selected.push(table[0].name);
      if (table[1]) selected.push(table[1].name);
    });
    // 2. Best 8 third-placed teams
    const thirdsRanked = getThirdPlacedStandings();
    thirdsRanked.slice(0, 8).forEach(team => {
      selected.push(team.name);
    });

    handleR32Change(selected);
    showNotification("Lagt til Topp 24 og de 8 beste treerne inn i 16-delsfinalen!", "success");
  };

  const toggleKnockoutTeam = (team, stage, setStage, limit) => {
    if (stage.includes(team)) {
      setStage(stage.filter(t => t !== team));
    } else {
      if (stage.length >= limit) {
        showNotification(`Maksimalt ${limit} lag kan velges i denne runden!`, 'error');
        return;
      }
      setStage([...stage, team]);
    }
  };

  const toggleActualKnockoutTeam = (team, stage, setStageHandler, limit) => {
    if (stage.includes(team)) {
      setStageHandler(stage.filter(t => t !== team));
    } else {
      if (stage.length >= limit) {
        showNotification(`Maksimalt ${limit} lag kan velges i denne runden!`, 'error');
        return;
      }
      setStageHandler([...stage, team]);
    }
  };

  // Submit/Sync Coupon with Netlify Serverless Database Function
  const saveCouponToNetlify = async () => {
    if (!userName.trim()) {
      showNotification("Legg inn navn før du sender inn!", "error");
      return;
    }

    setIsSavingToCloud(true);
    try {
      const response = await fetch('/.netlify/functions/save-coupon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          userName: userName.trim(),
          userPhone: userPhone.trim(),
          predictions,
          r32,
          r16,
          r8,
          r4,
          r2,
          winner,
          topscorer,
          updatedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      showNotification("Kupongen din ble lagret!", "success");
      fetchSubmittedCoupons(); // Refresh the list
    } catch (e) {
      console.error("Netlify Database save failed:", e);
      showNotification("Kunne ikke lagre til Netlify. Lagret lokalt i nettleseren.", "error");
    } finally {
      setIsSavingToCloud(false);
    }
  };

  // --- PDF GENERATOR 1: MODERN SLATE PDF ---
  const generatePDF = async () => {
    if (!userName.trim()) {
      showNotification("Legg inn navn under 'Deltaker-detaljer' først!", "error");
      return;
    }

    setIsGeneratingPdf(true);
    try {
      if (!window.jspdf) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
      }
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const drawHeader = (d, pageNum) => {
        d.setFillColor(15, 23, 42); 
        d.rect(0, 0, 210, 22, 'F');
        d.setTextColor(255, 255, 255);
        d.setFont('helvetica', 'bold');
        d.setFontSize(13);
        d.text("TIPPEKONKURRANSE FOTBALL-VM 2026", 15, 10);
        d.setFontSize(8);
        d.setFont('helvetica', 'normal');
        d.text("Tippeskiema", 15, 16);
        d.setFont('helvetica', 'bold');
        d.text(`Side ${pageNum} av 3`, 180, 13);
      };

      const drawDeltakerInfo = (d, y) => {
        d.setFillColor(241, 245, 249); 
        d.rect(15, y, 180, 14, 'F');
        d.setDrawColor(203, 213, 225); 
        d.rect(15, y, 180, 14, 'S');
        d.setTextColor(15, 23, 42);
        d.setFont('helvetica', 'bold');
        d.setFontSize(8.5);
        d.text(`DELTAKERNAVN: ${userName.toUpperCase()}`, 20, y + 5.5);
        d.text(`TELEFON: ${userPhone || '—'}`, 20, y + 10.5);
        d.text(`DATO: ${new Date().toLocaleDateString('no-NO')}`, 140, y + 5.5);
        d.setFontSize(7.5);
        d.setFont('helvetica', 'normal');
        d.text(`Gruppespill: ${totalMatchesPredicted}/72`, 140, y + 10.5);
      };

      const drawRulesBoxCompact = (d, y) => {
        d.setFillColor(248, 250, 252); 
        d.rect(15, y, 180, 24, 'F');
        d.setDrawColor(203, 213, 225); 
        d.rect(15, y, 180, 24, 'S');
        
        d.setTextColor(15, 23, 42);
        d.setFont('helvetica', 'bold');
        d.setFontSize(8);
        d.text("REGLER & POENGSYSTEM FRA OFFISIELT SKJEMA:", 20, y + 4.5);
        
        d.setFont('helvetica', 'normal');
        d.setFontSize(6.8);
        d.setTextColor(71, 85, 105);
        d.text("* INNSATS: 200,- pr person. Hele potten går til premier.", 20, y + 9);
        d.text("* INNLEVERINGSFRIST: 11. juni kl. 21.00 (etter dette tas ingen skjemaer imot).", 20, y + 13.5);
        d.text("* POENGSYSTEM: 1p per riktig gruppespilltips, pluss 1-6p per riktig tips i sluttspillet.", 20, y + 18);
        d.text("* PREMIER: ca 10% til leder før sluttspill, ca 10% til nr. 3, ca 30% til nr. 2, ca 50% til vinneren.", 20, y + 22.5);
      };

      const drawTableColumnHeader = (d, y) => {
        const startX = 15;
        const width = 180;
        d.setFillColor(15, 23, 42); 
        d.rect(startX, y, width, 5.5, 'F');
        d.setTextColor(255, 255, 255);
        d.setFont('helvetica', 'bold');
        d.setFontSize(7.5);
        d.text("DATO", startX + 2, y + 3.8);
        d.text("LAG 1", startX + 22, y + 3.8);
        d.text("LAG 2", startX + 85, y + 3.8);
        d.text("H", startX + 156.5, y + 3.8);
        d.text("U", startX + 164.5, y + 3.8);
        d.text("B", startX + 172.5, y + 3.8);
      };

      const drawGroupTableVertical = (d, groupLetter, y) => {
        const group = GROUPS_DATA[groupLetter];
        const startX = 15;
        const width = 180;

        d.setFillColor(16, 185, 129); 
        d.rect(startX, y, width, 5, 'F');
        d.setTextColor(255, 255, 255);
        d.setFont('helvetica', 'bold');
        d.setFontSize(8);
        d.text(`Gruppe ${groupLetter}`, startX + 3, y + 3.8);

        d.setFont('helvetica', 'normal');
        
        group.matches.forEach((m, idx) => {
          const rowY = y + 5 + (idx * 4.4);
          
          if (idx % 2 === 1) {
            d.setFillColor(248, 250, 252); 
            d.rect(startX, rowY, width, 4.4, 'F');
          }
          
          d.setDrawColor(226, 232, 240); 
          d.line(startX, rowY + 4.4, startX + width, rowY + 4.4);
          
          d.setFontSize(6.8);
          d.setTextColor(0, 0, 0); 
          d.text(m.date, startX + 2, rowY + 3.1);
          d.text(m.home, startX + 22, rowY + 3.1);
          d.text(m.away, startX + 85, rowY + 3.1);

          const pred = predictions[m.id];
          
          const drawBox = (label, bx, isActive) => {
            if (isActive) {
              d.setFillColor(16, 185, 129); 
              d.rect(bx, rowY + 0.6, 6, 3.2, 'F');
              d.setTextColor(255, 255, 255);
              d.setFont('helvetica', 'bold');
            } else {
              d.setDrawColor(203, 213, 225); 
              d.rect(bx, rowY + 0.6, 6, 3.2, 'S');
              d.setTextColor(148, 163, 184);
              d.setFont('helvetica', 'normal');
            }
            d.setFontSize(6);
            d.text(label, bx + 1.4, rowY + 3);
          };

          drawBox('H', startX + 155, pred === 'H');
          drawBox('U', startX + 163, pred === 'U');
          drawBox('B', startX + 171, pred === 'B');
        });

        d.setDrawColor(148, 163, 184); 
        d.rect(startX, y, width, 31.4, 'S');
      };

      const drawColHeader = (title, x, y, width) => {
        doc.setFillColor(241, 245, 249);
        doc.rect(x, y, width, 5.5, 'F');
        doc.setDrawColor(203, 213, 225);
        doc.rect(x, y, width, 5.5, 'S');
        doc.setTextColor(51, 65, 85);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.2);
        doc.text(title, x + 1.5, y + 3.8);
      };

      // --- SIDE 1 ---
      drawHeader(doc, 1);
      drawDeltakerInfo(doc, 25);
      drawRulesBoxCompact(doc, 41);
      drawTableColumnHeader(doc, 68);

      let currentY = 74.5;
      const groupSpacing = 32.5; 
      
      ['A', 'B', 'C', 'D', 'E', 'F'].forEach(g => {
        drawGroupTableVertical(doc, g, currentY);
        currentY += groupSpacing;
      });

      // --- SIDE 2 ---
      doc.addPage();
      drawHeader(doc, 2);
      drawTableColumnHeader(doc, 25);

      currentY = 31.5;
      ['G', 'H', 'I', 'J', 'K', 'L'].forEach(g => {
        drawGroupTableVertical(doc, g, currentY);
        currentY += groupSpacing;
      });

      // --- SIDE 3 ---
      doc.addPage();
      drawHeader(doc, 3);
      
      doc.setFillColor(15, 23, 42); 
      doc.rect(15, 25, 180, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text("DINE VALGTE LAG FOR SLUTTSPILLET", 20, 30.5);

      const colHeight = 84;
      
      drawColHeader("16-delsfinale (32 lag)", 15, 36, 70);
      doc.setDrawColor(203, 213, 225);
      doc.rect(15, 41.5, 70, colHeight, 'S');
      
      for (let i = 0; i < 16; i++) {
        const rowY = 42 + (i * 5.2);
        const team = r32[i] || "—";
        if (i % 2 === 1) {
          doc.setFillColor(248, 250, 252);
          doc.rect(15.4, rowY - 0.5, 34.2, 5.1, 'F');
        }
        doc.setFontSize(6.8);
        doc.text(`${i + 1}.`, 16.2, rowY + 3);
        doc.setFont('helvetica', team !== "—" ? 'bold' : 'normal');
        doc.text(team, 20.2, rowY + 3);
        doc.setFont('helvetica', 'normal');
      }
      for (let i = 16; i < 32; i++) {
        const subIdx = i - 16;
        const rowY = 42 + (subIdx * 5.2);
        const team = r32[i] || "—";
        if (subIdx % 2 === 1) {
          doc.setFillColor(248, 250, 252);
          doc.rect(50.4, rowY - 0.5, 34.2, 5.1, 'F');
        }
        doc.setFontSize(6.8);
        doc.text(`${i + 1}.`, 51.2, rowY + 3);
        doc.setFont('helvetica', team !== "—" ? 'bold' : 'normal');
        doc.text(team, 55.2, rowY + 3);
        doc.setFont('helvetica', 'normal');
      }

      // 2. 8-delsfinalister (16 lag)
      drawColHeader("8-dels (16 lag)", 89, 36, 32);
      
      doc.setDrawColor(203, 213, 225);
      doc.rect(89, 41.5, 32, colHeight, 'S');
      for (let i = 0; i < 16; i++) {
        const rowY = 42 + (i * 5.2);
        const team = r16[i] || "—";
        if (i % 2 === 1) {
          doc.setFillColor(248, 250, 252);
          doc.rect(89.4, rowY - 0.5, 31.2, 4.8, 'F');
        }
        doc.setFontSize(6.8);
        doc.text(`${i + 1}.`, 90.2, rowY + 3);
        doc.setFont('helvetica', team !== "—" ? 'bold' : 'normal');
        doc.text(team, 94.2, rowY + 3);
        doc.setFont('helvetica', 'normal');
      }

      // 3. Kvart- og semifinalister
      drawColHeader("Kvart & Semi", 125, 36, 34);
      doc.setDrawColor(203, 213, 225);
      doc.rect(125, 41.5, 34, colHeight, 'S');
      
      // Kvart
      doc.setFillColor(241, 245, 249);
      doc.rect(125.4, 42, 33.2, 4, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      doc.setTextColor(100, 116, 139);
      doc.text("Kvartfinaler (8 lag)", 127, 45);
      for (let i = 0; i < 8; i++) {
        const rowY = 47 + (i * 4.6);
        const team = r8[i] || "—";
        doc.setFontSize(6.8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(15, 23, 42);
        doc.text(`${i + 1}.`, 127, rowY + 2.5);
        doc.setFont('helvetica', team !== "—" ? 'bold' : 'normal');
        doc.text(team, 131, rowY + 2.5);
      }

      // Semi
      doc.setFillColor(241, 245, 249);
      doc.rect(125.4, 85, 33.2, 4, 'F');
      doc.line(125, 85, 159, 85);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      doc.setTextColor(100, 116, 139);
      doc.text("Semifinaler (4 lag)", 127, 88);
      for (let i = 0; i < 4; i++) {
        const rowY = 90 + (i * 4.6);
        const team = r4[i] || "—";
        doc.setFontSize(6.8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(15, 23, 42);
        doc.text(`${i + 1}.`, 127, rowY + 2.5);
        doc.setFont('helvetica', team !== "—" ? 'bold' : 'normal');
        doc.text(team, 131, rowY + 2.5);
      }

      // 4. Finalister, vinner og toppscorer
      drawColHeader("Vinnere", 163, 36, 32);
      doc.setDrawColor(203, 213, 225);
      doc.rect(163, 41.5, 32, colHeight, 'S');

      // Finalister
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(100, 116, 139);
      doc.text("Finalister (2 lag)", 165, 45.5);
      for (let i = 0; i < 2; i++) {
        const rowY = 47.5 + (i * 4.6);
        const team = r2[i] || "—";
        doc.setFontSize(6.8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(15, 23, 42);
        doc.text(`${i + 1}.`, 165, rowY + 2.5);
        doc.setFont('helvetica', team !== "—" ? 'bold' : 'normal');
        doc.text(team, 169, rowY + 2.5);
      }

      // Verdensmester
      doc.line(163, 58, 195, 58);
      doc.setFillColor(254, 243, 199); 
      doc.rect(163.4, 58.5, 31.2, 22, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.2);
      doc.setTextColor(146, 64, 14);
      doc.text("VERDENSMESTER (6p)", 165, 62.5);
      doc.setFontSize(7.5);
      doc.setTextColor(15, 23, 42);
      doc.text(winner || "—", 165, 71.5);

      // Toppscorer
      doc.line(163, 81, 195, 81);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      doc.setTextColor(100, 116, 139);
      doc.text("TOPPSCORER (6p)", 165, 85.5);
      doc.setFontSize(7);
      doc.setTextColor(15, 23, 42);
      const tsText = topscorer || "—";
      const truncatedTs = tsText.length > 16 ? tsText.substring(0, 14) + '..' : tsText;
      doc.text(truncatedTs, 165, 93);

      // --- NEDRE HALVDEL SIDE 3: POENGSYSTEM SAMMENDRAG ---
      const summaryY = 135;
      doc.setFillColor(248, 250, 252); 
      doc.rect(15, summaryY, 180, 52, 'F');
      doc.setDrawColor(15, 23, 42); 
      doc.setLineWidth(0.4);
      doc.rect(15, summaryY, 180, 52, 'S');
      doc.setLineWidth(0.2); 

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text("KUPONGSYSTEM SAMMENDRAG & POENGSCORE", 20, summaryY + 6);

      const drawRow = (label, points, valueY) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.2);
        doc.text(label, 20, valueY);
        doc.setFont('helvetica', 'bold');
        doc.text(points, 135, valueY);
      };

      drawRow("72 Gruppespills-kamper (H-U-B):", "1 poeng pr riktig tips (Maks 72 poeng)", summaryY + 12);
      drawRow("Tippe 16-delsfinalister (32 lag):", "1 poeng pr riktig lag (Maks 32 poeng)", summaryY + 17);
      drawRow("Tippe 8-delsfinalister (16 lag):", "2 poeng pr riktig lag (Maks 16 poeng)", summaryY + 22);
      drawRow("Tippe Kvartfinalister (8 lag):", "3 poeng pr riktig lag (Maks 12 poeng)", summaryY + 27);
      drawRow("Tippe Semifinalister (4 lag):", "4 poeng pr riktig lag (Maks 10 poeng)", summaryY + 32);
      drawRow("Tippe Finalister (2 lag):", "5 poeng pr riktig lag (Maks 10 poeng)", summaryY + 37);
      drawRow("Verdensmester (1 lag):", "6 poeng dersom riktig (Maks 6 poeng)", summaryY + 42);
      drawRow("Mesterskapets Toppscorer:", "6 poeng dersom riktig (Maks 6 poeng)", summaryY + 47);

      doc.setFillColor(15, 23, 42);
      doc.rect(15, summaryY + 52, 180, 7, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.text("MAKSIMAL POTENSIELL POENGSCORE: 164 POENG", 20, summaryY + 56.5);

      doc.setTextColor(148, 163, 184);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.text(`Digitalt generert bevis fra VM 2026 Tippeportal. Registrert: ${new Date().toLocaleString('no-NO')}`, 15, 205);

      doc.save(`Tippekonkurranse_VM_2026_${userName.replace(/\s+/g, '_')}.pdf`);
      showNotification("Suksess! PDF-en din er generert og lastet ned!");
    } catch (err) {
      console.error("PDF generation failure: ", err);
      showNotification("Kunne ikke generere PDF. Kontroller nettverkstilkoblingen.", "error");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // --- PDF GENERATOR 2: CLASSIC ORIGINAL PDF TEMPLATE ---
  const generateClassicPDF = async () => {
    if (!userName.trim()) {
      showNotification("Legg inn navn under 'Deltaker-detaljer' først!", "error");
      return;
    }

    setIsGeneratingClassicPdf(true);
    try {
      if (!window.jspdf) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
      }
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const drawClassicHeader = (d, pageNum) => {
        d.setFillColor(20, 50, 110); 
        d.rect(15, 10, 180, 8, 'F');
        d.setTextColor(255, 255, 255);
        d.setFont('helvetica', 'bold');
        d.setFontSize(10.5);
        d.text("TIPPEKONKURRANSE FOTBALL-VM 2026", 18, 15.5);
        d.setFontSize(7.5);
        d.text(`SIDE ${pageNum} av 3`, 175, 15.5);
      };

      const drawClassicTableHead = (d, y) => {
        const startX = 15;
        const width = 180;
        d.setFillColor(30, 65, 130);
        d.rect(startX, y, width, 5.5, 'F');
        d.setTextColor(255, 255, 255);
        d.setFont('helvetica', 'bold');
        d.setFontSize(8);
        d.text("DATO", startX + 2, y + 3.8);
        d.text("LAG 1", startX + 27, y + 3.8);
        d.text("LAG 2", startX + 92, y + 3.8);
        d.text("H", startX + 156.5, y + 3.8);
        d.text("U", startX + 164.5, y + 3.8);
        d.text("B", startX + 172.5, y + 3.8);
      };

      const drawClassicGroupTable = (d, groupLetter, y) => {
        const group = GROUPS_DATA[groupLetter];
        const startX = 15;
        const width = 180;

        d.setFillColor(45, 100, 190);
        d.rect(startX, y, width, 5, 'F');
        d.setTextColor(255, 255, 255);
        d.setFont('helvetica', 'bold');
        d.setFontSize(8);
        d.text(`Gruppe ${groupLetter}`, startX + 2, y + 3.8);

        d.setTextColor(0, 0, 0); 
        d.setFont('helvetica', 'normal');
        
        group.matches.forEach((m, idx) => {
          const rowY = y + 5 + (idx * 4.6);
          
          d.setDrawColor(180, 180, 180);
          d.line(startX, rowY, startX + width, rowY); 
          
          d.setFontSize(7.5);
          d.text(m.date, startX + 2, rowY + 3.2);
          d.text(m.home, startX + 27, rowY + 3.2);
          d.text(m.away, startX + 92, rowY + 3.2);

          const pred = predictions[m.id];
          
          const drawSquare = (label, bx, isActive) => {
            d.setDrawColor(120, 120, 120);
            d.rect(bx, rowY + 0.6, 6, 3.4, 'S');
            if (isActive) {
              d.setFont('helvetica', 'bold');
              d.setFontSize(7.5);
              d.setTextColor(0, 0, 0);
              d.text("X", bx + 1.8, rowY + 3.1);
              d.setFont('helvetica', 'normal');
            }
          };

          drawSquare('H', startX + 155, pred === 'H');
          drawSquare('U', startX + 163, pred === 'U');
          drawSquare('B', startX + 171, pred === 'B');
        });

        d.setDrawColor(120, 120, 120);
        d.rect(startX, y, width, 32.6, 'S');
        d.line(startX + 25, y + 5, startX + 25, y + 32.6); 
        d.line(startX + 90, y + 5, startX + 90, y + 32.6); 
        d.line(startX + 153, y + 5, startX + 153, y + 32.6); 
        d.line(startX + 161, y + 5, startX + 161, y + 32.6); 
        d.line(startX + 169, y + 5, startX + 169, y + 32.6); 
      };

      // --- SIDE 1: Grupper A - F ---
      drawClassicHeader(doc, 1);
      drawClassicTableHead(doc, 20);

      let currentY = 27;
      const tableSpacing = 33.6;
      ['A', 'B', 'C', 'D', 'E', 'F'].forEach(g => {
        drawClassicGroupTable(doc, g, currentY);
        currentY += tableSpacing;
      });

      // --- SIDE 2: Grupper G - L ---
      doc.addPage();
      drawClassicHeader(doc, 2);
      drawClassicTableHead(doc, 20);

      currentY = 27;
      ['G', 'H', 'I', 'J', 'K', 'L'].forEach(g => {
        drawClassicGroupTable(doc, g, currentY);
        currentY += tableSpacing;
      });

      // --- SIDE 3 ---
      doc.addPage();
      drawClassicHeader(doc, 3);

      doc.setFillColor(20, 50, 110);
      doc.rect(15, 20, 180, 6.5, 'F');
      doc.setDrawColor(0, 0, 0);
      doc.rect(15, 20, 180, 6.5, 'S');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text("TIPPEKONKURRANSE FOTBALL-VM 2026 – SLUTTSPILL", 18, 24.5);

      const drawClassicSectionHeader = (title, y) => {
        doc.setFillColor(20, 50, 110);
        doc.rect(15, y, 180, 4.5, 'F');
        doc.setDrawColor(0, 0, 0);
        doc.rect(15, y, 180, 4.5, 'S');
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.8);
        doc.text(title, 17, y + 3.2);
        doc.setTextColor(0, 0, 0);
      };

      const cellHeight = 4.5;

      // 1. HVILKE 32 LAG KOMMER TIL 16-DELSFINALE?
      drawClassicSectionHeader("HVILKE 32 LAG KOMMER TIL 16-DELSFINALE? (1 poeng pr riktig svar)", 26.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setDrawColor(0, 0, 0);
      for (let r = 0; r < 16; r++) {
        for (let c = 0; c < 2; c++) {
          const x = 15 + (c * 90);
          const ry = 31 + (r * cellHeight);
          doc.rect(x, ry, 90, cellHeight, 'S');
          const teamIdx = r * 2 + c;
          const team = r32[teamIdx] || "";
          if (team) {
            doc.text(team, x + 2.5, ry + 3.2);
          }
        }
      }

      // 2. HVILKE 16 LAG KOMMER TIL 8-DELSFINALE?
      drawClassicSectionHeader("HVILKE 16 LAG KOMMER TIL 8-DELSFINALE? (2 poeng pr riktig svar)", 103);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 2; c++) {
          const x = 15 + (c * 90);
          const ry = 107.5 + (r * cellHeight);
          doc.rect(x, ry, 90, cellHeight, 'S');
          const teamIdx = r * 2 + c;
          const team = r16[teamIdx] || "";
          if (team) {
            doc.text(team, x + 2.5, ry + 3.2);
          }
        }
      }

      // 3. HVILKE 8 LAG KOMMER TIL KVARTFINALE?
      drawClassicSectionHeader("HVILKE 8 LAG KOMMER TIL KVARTFINALE? (3 poeng pr riktig svar)", 143.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 2; c++) {
          const x = 15 + (c * 90);
          const ry = 148 + (r * cellHeight);
          doc.rect(x, ry, 90, cellHeight, 'S');
          const teamIdx = r * 2 + c;
          const team = r8[teamIdx] || "";
          if (team) {
            doc.text(team, x + 2.5, ry + 3.2);
          }
        }
      }

      // 4. HVILKE 4 LAG KOMMER TIL SEMIFINALE?
      drawClassicSectionHeader("HVILKE 4 LAG KOMMER TIL SEMIFINALE? (4 poeng pr riktig svar)", 166);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 2; c++) {
          const x = 15 + (c * 90);
          const ry = 170.5 + (r * cellHeight);
          doc.rect(x, ry, 90, cellHeight, 'S');
          const teamIdx = r * 2 + c;
          const team = r4[teamIdx] || "";
          if (team) {
            doc.text(team, x + 2.5, ry + 3.2);
          }
        }
      }

      // 5. HVILKE 2 LAG KOMMER TIL FINALEN?
      drawClassicSectionHeader("HVILKE 2 LAG KOMMER TIL FINALEN? (5 poeng pr riktig svar)", 179.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      for (let c = 0; c < 2; c++) {
        const x = 15 + (c * 90);
        const ry = 184;
        doc.rect(x, ry, 90, cellHeight, 'S');
        const team = r2[c] || "";
        if (team) {
          doc.text(team, x + 2.5, ry + 3.2);
        }
      }

      // 6. HVILKET LAG BLIR VERDENSMESTER 2026? (6 poeng)
      drawClassicSectionHeader("HVILKET LAG BLIR VERDENSMESTER 2026? (6 poeng)", 188.5);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.rect(15, 193, 90, cellHeight, 'S');
      doc.rect(105, 193, 90, cellHeight, 'S'); 
      if (winner) {
        doc.text(winner, 17, 193 + 3.2);
      }

      // 7. HVILKEN SPILLER BLIR TOPPSCORER I VM 2026? (6 poeng)
      drawClassicSectionHeader("HVILKEN SPILLER BLIR TOPPSCORER I VM 2026? (6 poeng)", 197.5);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.rect(15, 202, 180, cellHeight, 'S');
      if (topscorer) {
        doc.text(topscorer, 17, 202 + 3.2);
      }

      // Detaljeboks for Navn og Telefonnummer
      const detailBoxY = 208.5;
      doc.setFillColor(245, 247, 250);
      doc.rect(15, detailBoxY, 180, 10, 'F');
      doc.setDrawColor(0, 0, 0);
      doc.rect(15, detailBoxY, 180, 10, 'S');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.2);
      doc.setTextColor(0, 0, 0);
      doc.text(`DITT NAVN: ${userName.toUpperCase() || "______________________________________________________"}`, 20, detailBoxY + 3.8);
      doc.text(`TELEFONNUMMER: ${userPhone || "______________________________________________________"}`, 20, detailBoxY + 7.8);

      const drawClassicRulesHeader = (title, y) => {
        doc.setFillColor(20, 50, 110);
        doc.rect(15, y, 180, 4.2, 'F');
        doc.setDrawColor(0, 0, 0);
        doc.rect(15, y, 180, 4.2, 'S');
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.text(title, 17, y + 3);
        doc.setTextColor(0, 0, 0);
      };

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(5.8);

      // REGLER Section
      drawClassicRulesHeader("REGLER:", 220);
      doc.setTextColor(40, 40, 40); 
      let ry = 227;
      doc.text("* INNSATS PR PERSON: 200,- ALL INNSATS GÅR TIL PREMIE", 15, ry);
      doc.text("* DET ER INGEN BEGRENSNINGER PÅ ANTALL TILLATTE KUPONGER PR PERSON", 15, ry + 2.6);
      doc.text("* INNLEVERINGSFRIST: 11. JUNI KL. 21.00 (ETTER DETTE TAS IKKE SKJEMA IMOT)", 15, ry + 5.2);
      doc.text("* SKJEMA KAN OVERLEVERES DOMMEREN PERSONLIG ELLER SENDES PR E-POST", 15, ry + 7.8);
      doc.text("* BÅDE SKJEMA OG PENGER MÅ LEVERES FØR FRISTEN", 15, ry + 10.4);

      // POENGSYSTEMET Section
      drawClassicRulesHeader("POENGSYSTEMET:", 242);
      doc.setTextColor(40, 40, 40); 
      let py = 249;
      doc.text("* DET SKAL TIPPES ETT TIPS I HVER GRUPPESPILL-KAMP, TOTALT 72 KRYSS. (H, U ELLER B)", 15, py);
      doc.text("* DET GIS 1 POENG FOR HVERT RIKTIG TIPS I GRUPPESPILLS-KAMPENE", 15, py + 2.6);
      doc.text("* DET GIS 1-6 POENG FOR HVERT RIKTIG TIPS I SLUTTSPILLET", 15, py + 5.2);
      doc.text("* MAKSIMAL POENGSCORE: 72 + 32 + 16 + 12 + 10 + 10 + 6 + 6 = 164 POENG", 15, py + 7.8);
      doc.text("* DET KÅRES KUN 1 TOPPSCORER (TIEBREAKER FØLGER OFFISIELLE FIFA-REGLER) ", 15, py + 10.4);

      // PREMIEFORDELING Section
      drawClassicRulesHeader("PREMIEFORDELING:", 264);
      doc.setTextColor(40, 40, 45); 
      let dy = 271;
      doc.text("* CA 10% AV TOTAL INNSATS GÅR TIL DEN SOM LEDER FØR SLUTTSPILLET BEGYNNER", 15, dy);
      doc.text("* CA 10% AV TOTAL INNSATS GÅR TIL DEN SOM BLIR NR 3 TOTALT", 15, dy + 2.6);
      doc.text("* CA 30% AV TOTAL INNSATS GÅR TIL DEN SOM BLIR NR 2 TOTALT", 15, dy + 5.2);
      doc.text("* CA 50% AV TOTAL INNSATS GÅR TIL DEN SOM BLIR NR 1 TOTALT (VINNEREN)", 15, dy + 7.8);
      doc.text("* VED POENGLIKHET VIL DET BLI TREKNING OM PLASSERING", 15, dy + 10.4);

      doc.save(`Klassisk_Kupong_VM_2026_${userName.replace(/\s+/g, '_') || 'Uskrevet'}.pdf`);
      showNotification("Suksess! Den klassiske PDF-malen ble lastet ned!");
    } catch (err) {
      console.error("Classic PDF generation failure: ", err);
      showNotification("Kunne ikke generere klassisk PDF.", "error");
    } finally {
      setIsGeneratingClassicPdf(false);
    }
  };

  // --- SIMULATED RESULTS EDITING HELPERS ---
  const startEditingScore = (matchId, currentHome, currentAway) => {
    setEditingMatchId(matchId);
    setTempHomeScore(currentHome || 0);
    setTempAwayScore(currentAway || 0);
  };

  const saveEditedScore = (matchId) => {
    setActualResults(prev => ({
      ...prev,
      [matchId]: {
        played: true,
        homeScore: parseInt(tempHomeScore, 10) || 0,
        awayScore: parseInt(tempAwayScore, 10) || 0
      }
    }));
    setEditingMatchId(null);
    showNotification("Simulert kampresultat ble oppdatert!", "success");
  };

  const toggleMatchUnplayed = (matchId) => {
    setActualResults(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        played: false
      }
    }));
    setEditingMatchId(null);
    showNotification("Kampen er nå satt som kommende (unplayed).", "info");
  };

  const handleActualWinnerChange = (team) => {
    setActualPlayoffs(prev => ({
      ...prev,
      winner: team
    }));
    showNotification(`Faktisk verdensmester satt til ${team}`, 'success');
  };

  const handleActualTopscorerChange = (val) => {
    setActualPlayoffs(prev => ({
      ...prev,
      topscorer: val
    }));
  };

  // --- DYNAMIC RESULTS & POINTS MATH FOR "POENGOVERSIKT" ---
  const calculateActualGroupTable = (groupLetter) => {
    const group = GROUPS_DATA[groupLetter];
    const standings = {};
    
    group.teams.forEach(team => {
      standings[team] = { name: team, p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 };
    });

    group.matches.forEach(m => {
      const result = actualResults[m.id];
      if (!result || !result.played) return;

      standings[m.home].p += 1;
      standings[m.away].p += 1;

      if (result.homeScore > result.awayScore) {
        standings[m.home].w += 1;
        standings[m.home].pts += 3;
        standings[m.home].gd += (result.homeScore - result.awayScore);
        standings[m.away].l += 1;
        standings[m.away].gd -= (result.homeScore - result.awayScore);
      } else if (result.homeScore < result.awayScore) {
        standings[m.away].w += 1;
        standings[m.away].pts += 3;
        standings[m.away].gd += (result.awayScore - result.homeScore);
        standings[m.home].l += 1;
        standings[m.home].gd -= (result.awayScore - result.homeScore);
      } else {
        standings[m.home].d += 1;
        standings[m.home].pts += 1;
        standings[m.away].d += 1;
        standings[m.away].pts += 1;
      }
    });

    return Object.values(standings).sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      if (b.w !== a.w) return b.w - a.w;
      return a.name.localeCompare(b.name);
    });
  };

  const getActualThirdPlacedStandings = () => {
    const thirds = [];
    Object.keys(GROUPS_DATA).forEach(g => {
      const table = calculateActualGroupTable(g);
      if (table[2]) {
        thirds.push({
          group: g,
          ...table[2]
        });
      }
    });
    return thirds.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      if (b.w !== a.w) return b.w - a.w;
      return a.name.localeCompare(b.name);
    });
  };

  const getActualR32Teams = () => {
    const selected = [];
    Object.keys(GROUPS_DATA).forEach(g => {
      const table = calculateActualGroupTable(g);
      if (table[0] && table[0].p > 0) selected.push(table[0].name);
      if (table[1] && table[1].p > 0) selected.push(table[1].name);
    });
    const thirdsRanked = getActualThirdPlacedStandings();
    thirdsRanked.slice(0, 8).forEach(team => {
      if (team.p > 0) selected.push(team.name);
    });
    return selected;
  };

  const calculateCouponScore = (couponPredictions, couponR32 = [], couponR16 = [], couponR8 = [], couponR4 = [], couponR2 = [], couponWinner = '', couponTopscorer = '') => {
    let groupPoints = 0;
    let totalMatchesEvaluated = 0;

    Object.values(GROUPS_DATA).forEach(group => {
      group.matches.forEach(m => {
        const result = actualResults[m.id];
        if (result && result.played) {
          totalMatchesEvaluated += 1;
          let actualOutcome = 'U';
          if (result.homeScore > result.awayScore) actualOutcome = 'H';
          else if (result.homeScore < result.awayScore) actualOutcome = 'B';

          const userPred = couponPredictions[m.id];
          if (userPred === actualOutcome) {
            groupPoints += 1;
          }
        }
      });
    });

    const actualR32 = getActualR32Teams();
    
    // R32: 1p per correct team
    let r32Points = 0;
    if (actualR32.length > 0 && couponR32 && couponR32.length > 0) {
      couponR32.forEach(team => {
        if (actualR32.includes(team)) {
          r32Points += 1;
        }
      });
    }
    r32Points = Math.min(r32Points * 1, 32);

    // R16: 2p per correct team (Max 16p)
    let r16Points = 0;
    if (actualPlayoffs.r16 && actualPlayoffs.r16.length > 0 && couponR16 && couponR16.length > 0) {
      couponR16.forEach(team => {
        if (actualPlayoffs.r16.includes(team)) {
          r16Points += 1;
        }
      });
    }
    r16Points = Math.min(r16Points * 2, 16);

    // R8: 3p per correct team (Max 12p)
    let r8Points = 0;
    if (actualPlayoffs.r8 && actualPlayoffs.r8.length > 0 && couponR8 && couponR8.length > 0) {
      couponR8.forEach(team => {
        if (actualPlayoffs.r8.includes(team)) {
          r8Points += 1;
        }
      });
    }
    r8Points = Math.min(r8Points * 3, 12);

    // R4: 4p per correct team (Max 10p)
    let r4Points = 0;
    if (actualPlayoffs.r4 && actualPlayoffs.r4.length > 0 && couponR4 && couponR4.length > 0) {
      couponR4.forEach(team => {
        if (actualPlayoffs.r4.includes(team)) {
          r4Points += 1;
        }
      });
    }
    r4Points = Math.min(r4Points * 4, 10);

    // R2: 5p per correct team (Max 10p)
    let r2Points = 0;
    if (actualPlayoffs.r2 && actualPlayoffs.r2.length > 0 && couponR2 && couponR2.length > 0) {
      couponR2.forEach(team => {
        if (actualPlayoffs.r2.includes(team)) {
          r2Points += 1;
        }
      });
    }
    r2Points = Math.min(r2Points * 5, 10);

    // Winner: 6p
    let winnerPoints = 0;
    if (actualPlayoffs.winner && couponWinner && actualPlayoffs.winner.toLowerCase() === couponWinner.toLowerCase()) {
      winnerPoints = 6;
    }

    // Topscorer: 6p
    let topscorerPoints = 0;
    if (actualPlayoffs.topscorer && couponTopscorer && actualPlayoffs.topscorer.trim().toLowerCase() === couponTopscorer.trim().toLowerCase()) {
      topscorerPoints = 6;
    }

    const playoffPoints = r32Points + r16Points + r8Points + r4Points + r2Points + winnerPoints + topscorerPoints;

    return {
      groupPoints,
      playoffPoints,
      r32Points,
      r16Points,
      r8Points,
      r4Points,
      r2Points,
      winnerPoints,
      topscorerPoints,
      totalPoints: groupPoints + playoffPoints,
      evaluatedCount: totalMatchesEvaluated
    };
  };

  // --- API-FOOTBALL CLIENT FUNCTION ---
  const saveApiKey = (key) => {
    localStorage.setItem('tippekonkurranse_api_key', key);
    setApiSettings(prev => ({ ...prev, apiKey: key }));
    showNotification("API-nøkkel ble lagret lokalt!", "success");
    setIsSettingsOpen(false);
  };

  const fetchResultsFromApi = async (apiKey = apiSettings.apiKey, forcedTodayStr = null) => {
    if (!apiKey) {
      showNotification("Legg inn API-nøkkel under innstillinger først!", "error");
      return;
    }
    setIsSyncing(true);

    try {
      // API-FOOTBALL v3 League ID for World Cup is 1, season is 2026
      const url = `https://v3.football.api-sports.io/fixtures?league=1&season=2026`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-apisports-key': apiKey
        }
      });

      if (!response.ok) {
        throw new Error("Tilkobling til API-FOOTBALL feilet. Sjekk nøkkelen din.");
      }

      const data = await response.json();

      if (data.errors && Object.keys(data.errors).length > 0) {
        throw new Error(Object.values(data.errors)[0] || "Ukjent feil fra API");
      }

      const fixtures = data.response || [];
      if (fixtures.length === 0) {
        showNotification("Ingen offisielle kamper funnet for sesongen 2026 i API-et.", "info");
        return;
      }

      // Sync Group Stage Results
      setActualResults(prev => {
        const updated = { ...prev };
        
        Object.entries(GROUPS_DATA).forEach(([groupLetter, group]) => {
          group.matches.forEach(m => {
            const englishHome = TEAM_NAME_MAP[m.home];
            const englishAway = TEAM_NAME_MAP[m.away];

            const foundFixture = fixtures.find(f => {
              const apiHome = f.teams.home.name;
              const apiAway = f.teams.away.name;
              return (
                (apiHome === englishHome && apiAway === englishAway) ||
                (apiHome?.includes(englishHome) && apiAway?.includes(englishAway))
              );
            });

            if (foundFixture && ['FT', 'AET', 'PEN'].includes(foundFixture.fixture.status.short)) {
              updated[m.id] = {
                played: true,
                homeScore: foundFixture.goals.home ?? 0,
                awayScore: foundFixture.goals.away ?? 0
              };
            }
          });
        });

        return updated;
      });

      // Sync Playoff stage progressions
      const apiR16 = [];
      const apiR8 = [];
      const apiR4 = [];
      const apiR2 = [];
      let apiWinner = '';

      const getNorwegianName = (englishName) => {
        return Object.keys(TEAM_NAME_MAP).find(key => TEAM_NAME_MAP[key] === englishName) || englishName;
      };

      fixtures.forEach(f => {
        const stageRound = f.league.round || '';
        const isFinished = ['FT', 'AET', 'PEN'].includes(f.fixture.status.short);
        
        if (isFinished) {
          const homeNor = getNorwegianName(f.teams.home.name);
          const awayNor = getNorwegianName(f.teams.away.name);
          const winnerEng = f.teams.home.winner ? f.teams.home.name : f.teams.away.name;
          const winnerNor = getNorwegianName(winnerEng);

          if (stageRound.includes('Round of 16')) {
            if (!apiR16.includes(winnerNor)) apiR16.push(winnerNor);
          } else if (stageRound.includes('Quarter-finals')) {
            if (!apiR8.includes(winnerNor)) apiR8.push(winnerNor);
          } else if (stageRound.includes('Semi-finals')) {
            if (!apiR4.includes(winnerNor)) apiR4.push(winnerNor);
          } else if (stageRound.includes('Final')) {
            if (!apiR2.includes(homeNor)) apiR2.push(homeNor);
            if (!apiR2.includes(awayNor)) apiR2.push(awayNor);
            apiWinner = winnerNor;
          }
        }
      });

      setActualPlayoffs(prev => ({
        ...prev,
        ...(apiR16.length > 0 && { r16: apiR16 }),
        ...(apiR8.length > 0 && { r8: apiR8 }),
        ...(apiR4.length > 0 && { r4: apiR4 }),
        ...(apiR2.length > 0 && { r2: apiR2 }),
        ...(apiWinner && { winner: apiWinner })
      }));

      // Record Sync Timestamps
      const now = new Date();
      const timeStr = now.toLocaleDateString('no-NO') + ' kl. ' + now.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' });
      const todayStr = forcedTodayStr || now.toISOString().split('T')[0];

      localStorage.setItem('tippekonkurranse_last_sync_time', timeStr);
      localStorage.setItem('tippekonkurranse_last_sync_date', todayStr);
      setApiSettings(prev => ({ ...prev, lastSync: timeStr }));

      showNotification("Synkronisering fullført! Kampresultatene ble oppdatert.", "success");
    } catch (err) {
      console.error("API Error: ", err);
      showNotification(`Synkronisering feilet: ${err.message}`, "error");
    } finally {
      setIsSyncing(false);
    }
  };

  // Compile local draft and database coupons into a combined scoreboard dataset
  const localUserScoreObj = {
    id: 'local_draft',
    userName: userName.trim() || 'Ditt Utkast (Gjest)',
    isDraft: true,
    predictions,
    r32,
    r16,
    r8,
    r4,
    r2,
    winner,
    topscorer
  };

  // Remove local user duplicate if they already exist in database list by comparing ID signatures
  const scoredParticipants = [
    localUserScoreObj,
    ...participants.filter(p => p.userId !== userId)
  ].map(p => {
    const scores = calculateCouponScore(
      p.predictions || {}, 
      p.r32 || [], 
      p.r16 || [], 
      p.r8 || [], 
      p.r4 || [], 
      p.r2 || [], 
      p.winner || '', 
      p.topscorer || ''
    );
    return {
      ...p,
      ...scores
    };
  });

  const sortedScores = scoredParticipants.sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
    if (b.groupPoints !== a.groupPoints) return b.groupPoints - a.groupPoints;
    return a.userName.localeCompare(b.userName);
  });

  const filteredScores = sortedScores.filter(p => 
    p.userName.toLowerCase().includes(pointsSearchQuery.toLowerCase())
  );

  const playedMatchesCount = Object.values(actualResults).filter(m => m.played).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white pb-10">
      
      {/* HEADER BAR */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-xl shadow-lg shadow-emerald-950/30">
              <Trophy className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-white uppercase flex items-center gap-2">
                VM 2026 <span className="text-emerald-400 font-bold">Tippeportal</span>
              </h1>
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <Globe className="w-3 h-3 text-teal-400" /> Sommerens høydepunkt
              </p>
            </div>
          </div>

          {/* Completion Metrics Dashboard */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Gruppespill:</span> 
              <span className={`font-black px-2 py-0.5 rounded ${totalMatchesPredicted === 72 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-300'}`}>
                {totalMatchesPredicted}/72
              </span>
            </div>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Sluttspill:</span> 
              <span className={`font-black px-2 py-0.5 rounded ${isKnockoutComplete ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                {isKnockoutComplete ? 'Ferdig' : 'Ufullstendig'}
              </span>
            </div>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <span className="flex items-center gap-1 text-teal-400 bg-teal-950/30 px-2 py-0.5 rounded border border-teal-900/50">
              <CloudLightning className="w-3.5 h-3.5" /> Netlify-Tilkoblet
            </span>
          </div>

          {/* Primary View Switchers */}
          <nav className="flex flex-wrap bg-slate-950 p-1 rounded-xl border border-slate-800/80 gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab('group-overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'group-overview' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Gruppeoversikt
            </button>
            <button
              onClick={() => setActiveTab('full-coupon')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'full-coupon' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Fyll ut kupongen
            </button>
            <button
              onClick={() => {
                setActiveTab('results');
                setResultsSubTab('groups');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'results' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Kamper &amp; resultater
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'rules' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Regler &amp; premier
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'leaderboard' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Innsendte ({participants.length})
            </button>
            <button
              onClick={() => setActiveTab('points-overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'points-overview' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Poengoversikt
            </button>
          </nav>

        </div>
      </header>

      {/* NOTIFICATIONS */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl border bg-slate-950 border-slate-800 transition-all transform animate-bounce">
          {notification.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-400" />
          ) : (
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          )}
          <span className="text-xs font-bold text-slate-200">{notification.text}</span>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        
        {/* VIEW 1: INTERACTIVE GROUPS SIMULATION */}
        {activeTab === 'group-overview' && (
          <div className="space-y-6">
            
            {/* Quick Helper Banner */}
            <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" /> 12 grupper à 4 lag
                </h2>
                <p className="text-xs text-slate-400">
                  Tipp utfall på kampene under, og se hvordan live-tabellen og de beste 3.-plassene utvikler seg!
                </p>
              </div>
              <button
                onClick={autoFillCompleteR32}
                className="w-full md:w-auto py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <TrendingUp className="w-4 h-4" /> Legg til topp 2 fra hver gruppe og de 8 beste treerne til sluttspillet
              </button>
            </div>

            {/* Group Nav Tabs */}
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 shadow-md">
              <div className="flex flex-wrap gap-1">
                {Object.keys(GROUPS_DATA).map(g => {
                  const predictedCount = GROUPS_DATA[g].matches.filter(m => predictions[m.id]).length;
                  return (
                    <button
                      key={g}
                      onClick={() => setActiveGroup(g)}
                      className={`flex-1 min-w-[55px] py-2 text-center text-xs font-bold rounded-lg border transition-all ${
                        activeGroup === g 
                          ? 'bg-gradient-to-b from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-lg scale-105' 
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      Grp {g}
                      <span className="block text-[9px] opacity-70 font-normal">{predictedCount}/6</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Matches list for active group */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                  <div className="px-5 py-4 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-white text-sm tracking-wide">Kamper i Gruppe {activeGroup}</h3>
                      <p className="text-[11px] text-slate-500">Velg resultat for å oppdatere tabellen</p>
                    </div>
                    <button
                      onClick={() => clearGroupPredictions(activeGroup)}
                      className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Fjern valg
                    </button>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {GROUPS_DATA[activeGroup].matches.map(m => {
                      const pred = predictions[m.id];
                      return (
                        <div key={m.id} className="bg-slate-900/40 hover:bg-slate-900/80 p-3 rounded-xl border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800/80">
                              {m.date}
                            </span>
                            <div className="text-xs font-extrabold text-slate-200">
                              {m.home} <span className="text-slate-600 px-1">vs</span> {m.away}
                            </div>
                          </div>

                          {/* HUB Prediction Selector Buttons */}
                          <div className="flex gap-1.5 justify-end">
                            <button
                              onClick={() => handlePrediction(m.id, 'H')}
                              className={`w-11 h-8 rounded-lg font-black text-xs border transition-all ${
                                pred === 'H' 
                                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md scale-105' 
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              H
                            </button>
                            <button
                              onClick={() => handlePrediction(m.id, 'U')}
                              className={`w-11 h-8 rounded-lg font-black text-xs border transition-all ${
                                pred === 'U' 
                                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105' 
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              U
                            </button>
                            <button
                              onClick={() => handlePrediction(m.id, 'B')}
                              className={`w-11 h-8 rounded-lg font-black text-xs border transition-all ${
                                pred === 'B' 
                                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md scale-105' 
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              B
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setActiveTab('full-coupon')}
                    className="flex-1 py-3 px-4 bg-slate-950 hover:bg-slate-900 text-emerald-400 hover:text-emerald-300 rounded-xl border border-slate-800 text-xs font-bold text-center flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <List className="w-4 h-4" /> Vis samlet liste for alle 72 gruppespillskamper
                  </button>
                </div>
              </div>

              {/* Dynamic Simulated Standings Table */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                  <div className="px-5 py-4 bg-slate-900/60 border-b border-slate-800">
                    <h3 className="font-extrabold text-white text-sm tracking-wide">Simulert Tabell: Gruppe {activeGroup}</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="text-[10px] uppercase bg-slate-950 text-slate-450 border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-4">Pos</th>
                          <th className="py-2.5 px-2">Lag</th>
                          <th className="py-2.5 px-2 text-center">S</th>
                          <th className="py-2.5 px-2 text-center font-bold">PTS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {calculateGroupTable(activeGroup).map((row, idx) => {
                          const isTopTwo = idx < 2;
                          return (
                            <tr 
                              key={row.name} 
                              className={`border-b border-slate-900/60 hover:bg-slate-900/30 transition-colors ${
                                isTopTwo ? 'bg-emerald-950/10' : ''
                              }`}
                            >
                              <td className="py-3 px-4 font-black flex items-center gap-2">
                                <span className={`w-1 h-5 rounded ${isTopTwo ? 'bg-emerald-500' : idx === 2 ? 'bg-slate-600' : 'bg-red-900/40'}`} />
                                {idx + 1}
                              </td>
                              <td className="py-3 px-2 font-bold text-slate-200">{row.name}</td>
                              <td className="py-3 px-2 text-center text-slate-400">{row.p}</td>
                              <td className="py-3 px-2 text-center font-black text-white text-sm">
                                {row.pts}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 12 Third-Places Simulator Board */}
                <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                  <div className="px-5 py-3 bg-slate-900/60 border-b border-slate-800 flex justify-between items-center">
                    <div>
                      <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">De 8 beste treerne</h4>
                      <p className="text-[9px] text-slate-400">VM 2026: Topp 8 av de 12 treerne går videre</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900">
                      Live Rangering
                    </span>
                  </div>

                  <div className="p-3 max-h-56 overflow-y-auto space-y-1.5">
                    {getThirdPlacedStandings().map((third, idx) => {
                      const isAdvancing = idx < 8;
                      return (
                        <div 
                          key={third.group} 
                          className={`flex items-center justify-between px-3 py-1.5 rounded-lg border text-xs transition-all ${
                            isAdvancing 
                              ? 'bg-emerald-950/10 border-emerald-950/60 text-emerald-200' 
                              : 'bg-slate-900/20 border-slate-800 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-black opacity-85 w-4">{idx + 1}.</span>
                            <span className="font-bold">{third.name}</span>
                            <span className="text-[10px] opacity-70">(Gruppe {third.group})</span>
                          </div>
                          <div className="flex items-center gap-3 font-mono font-bold text-[11px]">
                            <span>PTS: {third.pts}</span>
                            <span>GD: {third.gd > 0 ? `+${third.gd}` : third.gd}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: FULL COMPREHENSIVE COUPON & SLUTTSPILL */}
        {activeTab === 'full-coupon' && (
          <div className="space-y-8">
            
            {/* User Profile Form */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-base text-white">Deltaker-detaljer</h3>
                  <p className="text-xs text-slate-400">Inkluderes i PDF, navn er obligatorisk</p>
                </div>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-black bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                  Deltaker
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-bold block flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-400" /> Navn <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="f.eks. Ola Nordmann"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-bold block flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> Telefonnummer
                  </label>
                  <input
                    type="tel"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder="8 siffer"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Complete Grid List for all 72 Matches */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="px-6 py-4.5 bg-slate-900/50 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-extrabold text-base text-white">Alle 72 gruppespillskamper</h3>
                  <p className="text-xs text-slate-400">Kamper per gruppe</p>
                </div>
                <div className="text-xs font-bold text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  Gruppespillskamper tippet: <span className="text-emerald-400">{totalMatchesPredicted}/72</span>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.entries(GROUPS_DATA).map(([groupLetter, group]) => (
                  <div key={groupLetter} className="bg-slate-900/30 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-black text-xs text-emerald-400 uppercase tracking-widest">Gruppe {groupLetter}</span>
                      <span className="text-[10px] text-slate-550 font-bold">6 kamper</span>
                    </div>

                    <div className="space-y-2">
                      {group.matches.map(m => {
                        const pred = predictions[m.id];
                        return (
                          <div key={m.id} className="bg-slate-950 p-2.5 rounded-lg border border-slate-900 hover:border-slate-800/85 transition-all space-y-2">
                            <div className="flex items-center justify-between text-[9px] text-slate-500">
                              <span>{m.date}</span>
                              <span className="font-mono text-slate-600">#{m.id}</span>
                            </div>
                            
                            <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
                              <span className="truncate max-w-[45%]">{m.home}</span>
                              <span className="text-slate-600 text-[10px] font-normal">vs</span>
                              <span className="truncate max-w-[45%] text-right">{m.away}</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1 pt-1.5">
                              {['H', 'U', 'B'].map(opt => (
                                <button
                                  key={opt}
                                  onClick={() => handlePrediction(m.id, opt)}
                                  className={`py-1 rounded text-center text-[10px] font-black transition-all ${
                                    pred === opt 
                                      ? opt === 'U' ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-slate-950'
                                      : 'bg-slate-900 text-slate-400 hover:text-white'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SLUTTSPILL BRACKET CASCADE FLOW */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-3.5">
                <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-emerald-400" /> Sluttspill-prediksjoner
                </h3>
                <p className="text-xs text-slate-400">
                  Valgene dine flyter automatisk videre i sluttspillet for å hindre logiske feil i kupongen.
                </p>
              </div>

              {/* 1. 16-DELSFINALE */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 gap-2">
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">1. 16-delsfinalister (32 lag)</h4>
                    <p className="text-[11px] text-slate-400">Velg de 32 lagene som tar seg videre fra gruppespillet (1 poeng pr riktig)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={autoFillCompleteR32}
                      className="py-1 px-3 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold rounded-lg transition-all"
                    >
                      Bruk Gruppe-Tips
                    </button>
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md ${r32.length === 32 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                      {r32.length}/32
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60 max-h-48 overflow-y-auto">
                  {ALL_TEAMS.map(team => {
                    const isSelected = r32.includes(team);
                    return (
                      <button
                        key={team}
                        type="button"
                        onClick={() => toggleKnockoutTeam(team, r32, handleR32Change, 32)}
                        className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                          isSelected 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                            : 'bg-slate-900/60 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {team}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. 8-DELSFINALE */}
              <div className="space-y-3 pt-4 border-t border-slate-900/80">
                <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">2. 8-delsfinalister (16 lag)</h4>
                    <p className="text-[11px] text-slate-400">Velg de 16 lagene som tar seg videre til 8-delsfinale (2 poeng pr riktig)</p>
                  </div>
                  <span className={`text-xs font-black px-2.5 py-1 rounded-md ${r16.length === 16 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                    {r16.length}/16
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                  {r32.length === 0 ? (
                    <span className="text-[11px] text-slate-500 italic">Vennligst velg lag i 16-delsfinalen først.</span>
                  ) : (
                    r32.map(team => {
                      const isSelected = r16.includes(team);
                      return (
                        <button
                          key={team}
                          type="button"
                          onClick={() => toggleKnockoutTeam(team, r16, handleR16Change, 16)}
                          className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                            isSelected 
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {team}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* 3. KVARTFINALE */}
              <div className="space-y-3 pt-4 border-t border-slate-900/80">
                <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">3. Kvartfinalister (8 lag)</h4>
                    <p className="text-[11px] text-slate-400">Velg de 8 lagene som tar seg videre til kvartfinale (3 poeng pr riktig)</p>
                  </div>
                  <span className={`text-xs font-black px-2.5 py-1 rounded-md ${r8.length === 8 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                    {r8.length}/8
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                  {r16.length === 0 ? (
                    <span className="text-[11px] text-slate-500 italic">Vennligst velg lag i 8-delsfinalen først.</span>
                  ) : (
                    r16.map(team => {
                      const isSelected = r8.includes(team);
                      return (
                        <button
                          key={team}
                          type="button"
                          onClick={() => toggleKnockoutTeam(team, r8, handleR8Change, 8)}
                          className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                            isSelected 
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {team}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* 4. SEMIFINALE */}
              <div className="space-y-3 pt-4 border-t border-slate-900/80">
                <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">4. Semifinalister (4 lag)</h4>
                    <p className="text-[11px] text-slate-400">Velg de fire lagene som tar seg videre til semifinale (4 poeng pr riktig)</p>
                  </div>
                  <span className={`text-xs font-black px-2.5 py-1 rounded-md ${r4.length === 4 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                    {r4.length}/4
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                  {r8.length === 0 ? (
                    <span className="text-[11px] text-slate-550 italic">Vennligst velg lag i kvartfinalen først.</span>
                  ) : (
                    r8.map(team => {
                      const isSelected = r4.includes(team);
                      return (
                        <button
                          key={team}
                          type="button"
                          onClick={() => toggleKnockoutTeam(team, r4, handleR4Change, 4)}
                          className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                            isSelected 
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {team}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* 5. FINALE & VINNER GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-900/80">
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider">5. Finalister (2 lag)</h4>
                      <p className="text-[11px] text-slate-400">Velg de to finalistene (5 poeng pr riktig)</p>
                    </div>
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md ${r2.length === 2 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                      {r2.length}/2
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                    {r4.length === 0 ? (
                      <span className="text-[11px] text-slate-550 italic">Vennligst velg lag i semifinalen først.</span>
                    ) : (
                      r4.map(team => {
                        const isSelected = r2.includes(team);
                        return (
                          <button
                            key={team}
                            type="button"
                            onClick={() => toggleKnockoutTeam(team, r2, handleR2Change, 2)}
                            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                              isSelected 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            {team}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">6. Verdensmester 2026 (6 poeng)</h4>
                    <p className="text-[11px] text-slate-400">Velg vinneren av verdensmesterskapet</p>
                  </div>

                  <div className="flex gap-3 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60 flex-wrap justify-center min-h-[64px] items-center">
                    {r2.length === 0 ? (
                      <span className="text-[11px] text-slate-550 italic">Vennligst velg de 2 finalistene først.</span>
                    ) : (
                      r2.map(team => {
                        const isSelected = winner === team;
                        return (
                          <button
                            key={team}
                            type="button"
                            onClick={() => setWinner(team)}
                            className={`flex-1 py-3 text-xs font-black rounded-lg border transition-all ${
                              isSelected 
                                ? 'bg-gradient-to-b from-yellow-400 to-amber-500 text-slate-950 border-yellow-300 shadow-lg scale-105' 
                                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            🏆 {team}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>

              </div>

              {/* Toppscorer input */}
              <div className="pt-4 border-t border-slate-900/80 space-y-2">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">7. Toppscorer i VM (6 poeng)</h4>
                  <p className="text-[11px] text-slate-400">Skriv inn navnet på spilleren du tror skårer flest mål totalt</p>
                </div>
                <input
                  type="text"
                  value={topscorer}
                  onChange={(e) => setTopscorer(e.target.value)}
                  placeholder="f.eks. Tore Hellsaa"
                  className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-lg py-2.5 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs"
                />
              </div>

            </div>

            {/* SYNC & SUBMISSION CONTROL AREA */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 shadow-2xl space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                    <CloudLightning className="w-4 h-4 text-emerald-400" /> Vil du sende inn eller oppdatere kupongen din?
                  </h3>
                  <p className="text-xs text-slate-400">
                    Send inn digitalt for å gjøre den synlig for andre. Last gjerne ned PDF først.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <button
                    onClick={saveCouponToNetlify}
                    disabled={isSavingToCloud}
                    className="flex-1 sm:flex-initial py-3 px-5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSavingToCloud ? 'Lagrer i Netlify DB...' : 'Send inn til portalen'}
                  </button>
                  <button
                    onClick={generatePDF}
                    disabled={isGeneratingPdf}
                    className="flex-1 sm:flex-initial py-3 px-5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-black text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
                  >
                    {isGeneratingPdf ? 'Oppretter...' : 'Last ned PDF'}
                  </button>
                  <button
                    onClick={generateClassicPDF}
                    disabled={isGeneratingClassicPdf}
                    className="flex-1 sm:flex-initial py-3 px-5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
                  >
                    {isGeneratingClassicPdf ? 'Oppretter...' : 'Klassisk PDF'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW: KAMPER & RESULTATER (WITH PLAYOFFS AND NESTED SUBTABS) */}
        {activeTab === 'results' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* View Title & Control Board */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3.5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-850 pb-3">
                <div>
                  <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-400" /> Kamp- og resultatoversikt
                  </h3>
                  <p className="text-xs text-slate-400">
                    Oversikt over alle mesterskapets offisielle kamper og sluttspillsutvikling.
                  </p>
                </div>
                
                {/* Sub-tabs for Results Category */}
                <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 max-w-xs w-full sm:w-auto">
                  <button
                    onClick={() => setResultsSubTab('groups')}
                    className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                      resultsSubTab === 'groups'
                        ? 'bg-emerald-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    Gruppespill
                  </button>
                  <button
                    onClick={() => setResultsSubTab('playoffs')}
                    className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                      resultsSubTab === 'playoffs'
                        ? 'bg-emerald-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    Sluttspill
                  </button>
                </div>
              </div>

              {/* API-FOOTBALL CONFIGURATION COMPONENT */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Globe className="w-4 h-4 animate-spin-slow" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">API-FOOTBALL Tilkobling</h4>
                      <p className="text-[10px] text-slate-450">
                        Resultater synkroniseres automatisk hver dag kl. <span className="text-emerald-400 font-bold">10:00 CEST</span>.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                      className="flex-1 sm:flex-none py-1.5 px-3.5 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-[11px] text-slate-300 font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Settings className="w-3.5 h-3.5" /> Innstillinger
                    </button>
                    <button
                      onClick={() => fetchResultsFromApi()}
                      disabled={isSyncing}
                      className="flex-1 sm:flex-none py-1.5 px-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 text-[11px] font-black rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                      {isSyncing ? 'Synkroniserer...' : 'Synkroniser nå'}
                    </button>
                  </div>
                </div>

                {/* Expanded API Settings Panel */}
                {isSettingsOpen && (
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-xs space-y-1">
                      <label className="font-bold text-slate-300 block">API-Sports API-nøkkel (v3.football)</label>
                      <span className="text-[10px] text-slate-500 block">Du kan hente API-nøkkelen din direkte fra dashbordet på api-football.com</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        placeholder="Skriv inn x-apisports-key..."
                        defaultValue={apiSettings.apiKey}
                        id="api_key_input"
                        className="flex-1 bg-slate-900 border border-slate-805 rounded-lg py-1.5 px-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs font-mono"
                      />
                      <button
                        onClick={() => saveApiKey(document.getElementById('api_key_input').value)}
                        className="py-1.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-all"
                      >
                        Lagre
                      </button>
                    </div>
                  </div>
                )}

                <div className="text-[10px] text-slate-500 flex flex-wrap gap-4 pt-1 border-t border-slate-850">
                  <span><strong>Siste oppdatering:</strong> {apiSettings.lastSync}</span>
                  <span><strong>Status:</strong> {apiSettings.apiKey ? 'Nøkkel konfigurert' : 'Nøkkel mangler'}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
                {resultsSubTab === 'groups' ? (
                  <>
                    I denne visningen kan du overvåke gruppespillets kampresultater.
                    For demonstrasjonens skyld har vi registrert fiktive resultater på de første kampene.
                    Du kan <span className="text-emerald-400 font-semibold">klikke på en hvilken som helst kamp</span> under for å raskt endre eller registrere et testresultat!
                  </>
                ) : (
                  <>
                    Administrer de faktiske utfallene for sluttspillet her. 
                    Klikk på lagene som avanserer fra runde til runde. 
                    Dette vil <span className="text-emerald-400 font-semibold">oppdatere poengoversikten automatisk</span> for alle deltakere i sanntid!
                  </>
                )}
              </p>

              {/* Dynamic inline score editing popup/bar if active in Groups sub-tab */}
              {resultsSubTab === 'groups' && editingMatchId && (
                <div className="p-4 bg-slate-900 rounded-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-4 transition-all">
                  <div className="text-xs">
                    <span className="text-slate-500 uppercase tracking-widest block text-[9px] font-bold">Redigerer kamp #{editingMatchId}</span>
                    <span className="font-bold text-white text-sm">
                      {GROUPS_DATA[editingMatchId[0]].matches.find(m => m.id === editingMatchId)?.home} vs {GROUPS_DATA[editingMatchId[0]].matches.find(m => m.id === editingMatchId)?.away}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      value={tempHomeScore}
                      onChange={(e) => setTempHomeScore(e.target.value)}
                      className="w-12 bg-slate-950 border border-slate-700 text-center text-sm font-black text-white rounded-lg py-1 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                    <span className="text-xs text-slate-500 font-bold">-</span>
                    <input
                      type="number"
                      min="0"
                      value={tempAwayScore}
                      onChange={(e) => setTempAwayScore(e.target.value)}
                      className="w-12 bg-slate-950 border border-slate-700 text-center text-sm font-black text-white rounded-lg py-1 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div className="flex gap-2 w-full md:w-auto">
                    <button
                      onClick={() => saveEditedScore(editingMatchId)}
                      className="flex-1 md:flex-initial py-1.5 px-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-lg transition-all"
                    >
                      Lagre Score
                    </button>
                    <button
                      onClick={() => toggleMatchUnplayed(editingMatchId)}
                      className="flex-1 md:flex-initial py-1.5 px-3 bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-bold rounded-lg transition-all"
                    >
                      Kommende (Nullstill)
                    </button>
                    <button
                      onClick={() => setEditingMatchId(null)}
                      className="py-1.5 px-3 bg-slate-950 hover:bg-slate-900 text-slate-400 text-xs font-semibold rounded-lg transition-all"
                    >
                      Avbryt
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CONTENT VIEW FOR GROUPS */}
            {resultsSubTab === 'groups' && (
              <div className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.entries(GROUPS_DATA).map(([groupLetter, group]) => (
                  <div key={groupLetter} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                      <span className="font-black text-xs text-emerald-400 uppercase tracking-widest">Gruppe {groupLetter}</span>
                      <span className="text-[10px] text-slate-550 font-bold">6 kamper</span>
                    </div>

                    <div className="space-y-2">
                      {group.matches.map(m => {
                        const result = actualResults[m.id];
                        const isPlayed = result && result.played;

                        return (
                          <div 
                            key={m.id} 
                            onClick={() => startEditingScore(m.id, result?.homeScore, result?.awayScore)}
                            className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all space-y-2 cursor-pointer group"
                          >
                            <div className="flex items-center justify-between text-[9px] text-slate-550">
                              <span>{m.date}</span>
                              {isPlayed ? (
                                <span className="text-[9px] font-black text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-900/40 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                  Ferdig
                                </span>
                              ) : (
                                <span className="font-bold text-slate-600 uppercase tracking-wider text-[8px]">
                                  Kommende
                                </span>
                              )}
                            </div>
                            
                            <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
                              <span className="truncate max-w-[38%] block group-hover:text-emerald-400 transition-colors">
                                {m.home}
                              </span>
                              
                              {isPlayed ? (
                                <div className="flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-md border border-slate-800 shadow-inner">
                                  <span className="text-xs font-black text-white">{result.homeScore}</span>
                                  <span className="text-[9px] text-slate-600 font-normal">-</span>
                                  <span className="text-xs font-black text-white">{result.awayScore}</span>
                                </div>
                              ) : (
                                <span className="text-slate-600 text-[10px] font-normal px-2 bg-slate-950 py-0.5 rounded border border-slate-900/50">
                                  vs
                                </span>
                              )}
                              
                              <span className="truncate max-w-[38%] text-right block group-hover:text-emerald-400 transition-colors">
                                {m.away}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CONTENT VIEW FOR PLAYOFFS */}
            {resultsSubTab === 'playoffs' && (
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6">
                
                {/* 1. R32 (Automatically Computed) */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 gap-2">
                    <div>
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider">1. Faktiske 16-delsfinalister (32 lag)</h4>
                      <p className="text-[11px] text-slate-455">Disse lagene er beregnet automatisk ut ifra grupperesultatene dine.</p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-900/45 rounded-md">
                      {getActualR32Teams().length} lag beregnet
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60 max-h-48 overflow-y-auto">
                    {getActualR32Teams().length === 0 ? (
                      <span className="text-[11px] text-slate-550 italic">Ingen grupperesultater er registrert som "Ferdig" ennå. Registrer resultater i Gruppespill-fanen.</span>
                    ) : (
                      getActualR32Teams().map(team => (
                        <div key={team} className="px-3 py-1.5 text-[11px] font-bold rounded-lg border border-slate-800 bg-slate-900 text-emerald-300">
                          {team}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* 2. Actual R16 */}
                <div className="space-y-3 pt-4 border-t border-slate-900/80">
                  <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider">2. Faktiske 8-delsfinalister (16 lag)</h4>
                      <p className="text-[11px] text-slate-450">Velg de 16 lagene som faktisk kom seg til 8-delsfinalen</p>
                    </div>
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md ${(actualPlayoffs.r16 || []).length === 16 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                      {(actualPlayoffs.r16 || []).length}/16
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                    {getActualR32Teams().length === 0 ? (
                      <span className="text-[11px] text-slate-555 italic">Vent på at lag blir beregnet i R32 over først.</span>
                    ) : (
                      getActualR32Teams().map(team => {
                        const isSelected = (actualPlayoffs.r16 || []).includes(team);
                        return (
                          <button
                            key={team}
                            type="button"
                            onClick={() => toggleActualKnockoutTeam(team, actualPlayoffs.r16 || [], handleActualR16Change, 16)}
                            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                              isSelected 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                                : 'bg-slate-900 border-slate-805 text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            {team}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* 3. Actual R8 */}
                <div className="space-y-3 pt-4 border-t border-slate-900/80">
                  <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider">3. Faktiske Kvartfinalister (8 lag)</h4>
                      <p className="text-[11px] text-slate-450">Velg de 8 lagene som faktisk nådde kvartfinalen</p>
                    </div>
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md ${(actualPlayoffs.r8 || []).length === 8 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                      {(actualPlayoffs.r8 || []).length}/8
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                    {(actualPlayoffs.r16 || []).length === 0 ? (
                      <span className="text-[11px] text-slate-555 italic">Vennligst velg lag i 8-delsfinalen først.</span>
                    ) : (
                      (actualPlayoffs.r16 || []).map(team => {
                        const isSelected = (actualPlayoffs.r8 || []).includes(team);
                        return (
                          <button
                            key={team}
                            type="button"
                            onClick={() => toggleActualKnockoutTeam(team, actualPlayoffs.r8 || [], handleActualR8Change, 8)}
                            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                              isSelected 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                                : 'bg-slate-900 border-slate-805 text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            {team}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* 4. Actual R4 */}
                <div className="space-y-3 pt-4 border-t border-slate-900/80">
                  <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider">4. Faktiske Semifinalister (4 lag)</h4>
                      <p className="text-[11px] text-slate-450">Velg de 4 lagene som faktisk nådde semifinalen</p>
                    </div>
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md ${(actualPlayoffs.r4 || []).length === 4 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                      {(actualPlayoffs.r4 || []).length}/4
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                    {(actualPlayoffs.r8 || []).length === 0 ? (
                      <span className="text-[11px] text-slate-555 italic">Vennligst velg lag i kvartfinalen først.</span>
                    ) : (
                      (actualPlayoffs.r8 || []).map(team => {
                        const isSelected = (actualPlayoffs.r4 || []).includes(team);
                        return (
                          <button
                            key={team}
                            type="button"
                            onClick={() => toggleActualKnockoutTeam(team, actualPlayoffs.r4 || [], handleActualR4Change, 4)}
                            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                              isSelected 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                                : 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            {team}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* 5. Actual R2 (Finalists) & actual Winner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-900/80">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                      <div>
                        <h4 className="font-bold text-white text-xs uppercase tracking-wider">5. Faktiske Finalister (2 lag)</h4>
                        <p className="text-[11px] text-slate-455">Velg de to finalistene</p>
                      </div>
                      <span className={`text-xs font-black px-2.5 py-1 rounded-md ${(actualPlayoffs.r2 || []).length === 2 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-900' : 'bg-amber-500/20 text-amber-400 border border-amber-900'}`}>
                        {(actualPlayoffs.r2 || []).length}/2
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60">
                      {(actualPlayoffs.r4 || []).length === 0 ? (
                        <span className="text-[11px] text-slate-555 italic">Vennligst velg lag i semifinalen først.</span>
                      ) : (
                        (actualPlayoffs.r4 || []).map(team => {
                          const isSelected = (actualPlayoffs.r2 || []).includes(team);
                          return (
                            <button
                              key={team}
                              type="button"
                              onClick={() => toggleActualKnockoutTeam(team, actualPlayoffs.r2 || [], handleActualR2Change, 2)}
                              className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                                isSelected 
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 text-slate-950 shadow-md scale-105' 
                                  : 'bg-slate-900 border-slate-805 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              {team}
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider">6. Faktisk Verdensmester 2026</h4>
                      <p className="text-[11px] text-slate-455">Velg den faktiske vinneren av VM</p>
                    </div>

                    <div className="flex gap-3 p-3.5 bg-slate-900/20 rounded-xl border border-slate-800/60 flex-wrap justify-center min-h-[64px] items-center">
                      {(actualPlayoffs.r2 || []).length === 0 ? (
                        <span className="text-[11px] text-slate-555 italic">Vennligst velg de to finalistene først.</span>
                      ) : (
                        (actualPlayoffs.r2 || []).map(team => {
                          const isSelected = actualPlayoffs.winner === team;
                          return (
                            <button
                              key={team}
                              type="button"
                              onClick={() => handleActualWinnerChange(team)}
                              className={`flex-1 py-3 text-xs font-black rounded-lg border transition-all ${
                                isSelected 
                                  ? 'bg-gradient-to-b from-yellow-400 to-amber-500 text-slate-950 border-yellow-300 shadow-lg scale-105' 
                                  : 'bg-slate-900 border-slate-800 text-slate-350 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              🏆 {team}
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>

                {/* 6. Actual Topscorer */}
                <div className="pt-4 border-t border-slate-900/80 space-y-2">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">7. Faktisk Toppscorer i VM</h4>
                    <p className="text-[11px] text-slate-455">Skriv inn navnet på spilleren som ble offisiell toppscorer</p>
                  </div>
                  <input
                    type="text"
                    value={actualPlayoffs.topscorer || ''}
                    onChange={(e) => handleActualTopscorerChange(e.target.value)}
                    placeholder="f.eks. Erling Haaland"
                    className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-lg py-2.5 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs"
                  />
                </div>

              </div>
            )}

          </div>
        )}

        {/* VIEW 3: RULES & REGULATION */}
        {activeTab === 'rules' && (
          <div className="max-w-3xl mx-auto bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
            
            <div className="border-b border-slate-800 pb-4 text-center">
              <span className="text-emerald-400 text-xs uppercase tracking-widest font-black">Reglement</span>
              <h2 className="text-2xl font-black text-white mt-1">Konkurranseregler &amp; Info</h2>
            </div>

            <div className="space-y-6 text-slate-300 text-xs leading-relaxed">
              
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 space-y-2">
                <h4 className="font-extrabold text-white uppercase text-[10px] tracking-wider">Generelt om konkurransen</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                  <li><strong className="text-slate-200">Innsats:</strong> 200,- pr person.</li>
                  <li><strong className="text-slate-200">Premiepott:</strong> Alt av innsats går direkte til premiepotten.</li>
                  <li><strong className="text-slate-200">Frist:</strong> Siste frist for innlevering er <strong className="text-white">11. juni kl. 21.00</strong>.</li>
                  <li>Du kan levere flere kuponger du vil.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">Poengsystem</h3>
                <p>Maksimal poengscore du kan oppnå er <strong className="text-emerald-400">164 poeng</strong>, fordelt slik:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="font-semibold text-slate-400">72 Gruppespillskamper</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded">1 poeng pr riktig tips</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="font-semibold text-slate-400">16-delsfinalister (32 lag)</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded">1 poeng pr riktig lag</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="font-semibold text-slate-400">8-delsfinalister (16 lag)</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded">2 poeng pr riktig lag</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="font-semibold text-slate-400">Kvartfinalister (8 lag)</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded">3 poeng pr riktig lag</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="font-semibold text-slate-400">Semifinalister (4 lag)</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded">4 poeng pr riktig lag</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="font-semibold text-slate-400">Finalister (2 lag)</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded">5 poeng pr riktig lag</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center col-span-1 sm:col-span-2">
                    <span className="font-semibold text-slate-400">Verdensmester (1 lag) &amp; Toppscorer</span>
                    <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded">6 poeng pr riktig</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-900">
                <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">Premiefordeling</h3>
                <div className="space-y-1.5 text-slate-400">
                  <div className="flex justify-between py-1.5 border-b border-slate-900">
                    <span>Leder før sluttspillet begynner</span>
                    <span className="font-bold text-white">ca 10% av innsatsen</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-900">
                    <span>3. Plass sammenlagt</span>
                    <span className="font-bold text-white">ca 10% av innsatsen</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-900">
                    <span>2. Plass sammenlagt</span>
                    <span className="font-bold text-white">ca 30% av innsatsen</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-900">
                    <span>1. Plass sammenlagt (Vinneren)</span>
                    <span className="font-bold text-white">ca 50% av innsatsen</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 italic">Ved poenglikhet vil plassering avgjøres ved loddtrekning.</p>
              </div>

            </div>

          </div>
        )}

        {/* VIEW 4: LEADERBOARD / SUBMITTED LIST */}
        {activeTab === 'leaderboard' && (
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
              <div>
                <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" /> Registrerte kuponger
                </h3>
                <p className="text-xs text-slate-400">Kuponger lagret i skyen til nå</p>
              </div>
              <span className="text-xs bg-slate-900 text-slate-300 font-bold px-3 py-1.5 rounded border border-slate-800">
                {participants.length} deltakere
              </span>
            </div>

            {participants.length === 0 ? (
              <div className="text-center py-12 text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-900/20">
                <CloudLightning className="w-8 h-8 text-slate-650 mx-auto mb-2 animate-bounce" />
                <p className="text-xs font-bold text-slate-450">Ingen innsendte kuponger tilgjengelig ennå</p>
                <p className="text-[10px] text-slate-550 mt-1 max-w-xs mx-auto">Sørg for å koble opp Netlify serverless database-funksjonene i prosjektet ditt for å fylle denne listen.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {participants.map((p, index) => (
                  <div key={p.id || index} className="bg-slate-900 p-4 rounded-xl border border-slate-850 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-black text-xs text-white uppercase">{p.userName}</span>
                      <span className="text-[10px] text-slate-550 font-bold">#{(p.userId || '').substring(0, 5)}</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-455">
                      <div className="flex justify-between">
                        <span>Gruppespill:</span>
                        <span className="font-bold text-slate-200">{Object.keys(p.predictions || {}).length}/72 tips</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vinner:</span>
                        <span className="font-bold text-emerald-400">{p.winner || 'Mangler'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Toppscorer:</span>
                        <span className="font-bold text-slate-200">{p.topscorer || 'Mangler'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 5: POENGOVERSIKT (UPDATED WITH COMPLETE PLAYOFF DETAILS) */}
        {activeTab === 'points-overview' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-xl">
                <div className="p-3 bg-emerald-950/40 text-emerald-400 rounded-xl border border-emerald-900/40">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-450 uppercase tracking-wider font-bold block">Spilte kamper</span>
                  <span className="text-2xl font-black text-white">{playedMatchesCount} <span className="text-xs text-slate-500 font-normal">/ 72 spilt</span></span>
                </div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-xl">
                <div className="p-3 bg-yellow-950/40 text-yellow-400 rounded-xl border border-yellow-900/40">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-455 uppercase tracking-wider font-bold block">Beste poengsum nå</span>
                  <span className="text-2xl font-black text-white">
                    {sortedScores.length > 0 ? Math.max(...sortedScores.map(s => s.totalPoints)) : 0} <span className="text-xs text-slate-500 font-normal">poeng</span>
                  </span>
                </div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-xl">
                <div className="p-3 bg-blue-950/40 text-blue-400 rounded-xl border border-blue-900/40">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-450 uppercase tracking-wider font-bold block">Deltakere</span>
                  <span className="text-2xl font-black text-white">{sortedScores.length} <span className="text-xs text-slate-500 font-normal">aktive</span></span>
                </div>
              </div>
            </div>

            {/* Scoreboard table card */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              <div className="px-5 py-4.5 bg-slate-900/50 border-b border-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" /> Resultattabell &amp; Poengberegning
                  </h3>
                  <p className="text-xs text-slate-400">Poeng oppdateres automatisk basert på registrerte resultater</p>
                </div>

                {/* Live Search */}
                <div className="w-full sm:w-64 relative">
                  <input
                    type="text"
                    placeholder="Søk på deltaker..."
                    value={pointsSearchQuery}
                    onChange={(e) => setPointsSearchQuery(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg py-1.5 pl-3 pr-8 text-slate-200 placeholder-slate-550 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs"
                  />
                  <span className="absolute right-2.5 top-2 text-slate-500 font-bold text-xs pointer-events-none">🔍</span>
                </div>
              </div>

              {/* Scoreboard Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="text-[10px] uppercase bg-slate-950 text-slate-455 border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4 font-black text-center w-12">Rank</th>
                      <th className="py-3 px-4">Deltaker</th>
                      <th className="py-3 px-4 text-center">Gruppespill (72p)</th>
                      <th className="py-3 px-4 text-center">Sluttspill (92p)</th>
                      <th className="py-3 px-4 text-center font-bold text-emerald-400">Total Poeng</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900/60">
                    {filteredScores.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="py-12 text-center text-slate-500 italic">
                          Ingen deltakere matcher søket ditt.
                        </td>
                      </tr>
                    ) : (
                      filteredScores.map((row, idx) => {
                        const isTopThree = idx < 3;
                        const rankMedals = ['🥇', '🥈', '🥉'];
                        
                        return (
                          <tr 
                            key={row.id || idx}
                            className={`hover:bg-slate-900/30 transition-all ${
                              row.isDraft ? 'bg-emerald-950/10 border-l-2 border-l-emerald-500' : ''
                            }`}
                          >
                            {/* RANKING POSITION */}
                            <td className="py-3.5 px-4 text-center font-black text-sm">
                              {isTopThree ? (
                                <span className="text-base" title={`${idx + 1}. Plass`}>
                                  {rankMedals[idx]}
                                </span>
                              ) : (
                                <span className="text-slate-455">{idx + 1}</span>
                              )}
                            </td>

                            {/* PARTICIPANT INFO */}
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-extrabold text-slate-200 text-xs flex items-center gap-1.5">
                                  {row.userName}
                                  {row.isDraft && (
                                    <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.2 rounded font-semibold tracking-wide">
                                      Ditt Utkast
                                    </span>
                                  )}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                  {row.userPhone ? `Tlf: ${row.userPhone}` : 'Telefon uoppgitt'}
                                </span>
                              </div>
                            </td>

                            {/* GROUPSTAGE SCORE */}
                            <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-300">
                              {row.groupPoints} <span className="text-[10px] text-slate-550">/ {playedMatchesCount}</span>
                            </td>

                            {/* FULL PLAYOFFS DYNAMIC SCORE WITH STAGE BREAKDOWN */}
                            <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-300">
                              <div className="flex flex-col items-center justify-center gap-0.5">
                                <span>{row.playoffPoints} <span className="text-[10px] text-slate-550">/ 92</span></span>
                                <span className="text-[9px] text-slate-550 font-normal tracking-tight">
                                  R32:{row.r32Points}p · R16:{row.r16Points}p · R8:{row.r8Points}p · R4:{row.r4Points}p · R2:{row.r2Points}p · V:{row.winnerPoints}p · T:{row.topscorerPoints}p
                                </span>
                              </div>
                            </td>

                            {/* TOTAL SCORE */}
                            <td className="py-3.5 px-4 text-center font-black text-sm text-emerald-400">
                              {row.totalPoints}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {/* Explanatory footer */}
              <div className="p-4.5 bg-slate-900/20 border-t border-slate-850 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Poengregler i tabellen:</strong> +1p pr riktig gruppespilltips, og live sluttspillspoeng (Max 92p) beregnet ut ifra faktiske sluttspillsresultater.
                  </span>
                </div>
                <div className="text-slate-550 text-right">
                  Systemet oppdateres i sanntid.
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 mt-12 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>Utviklet som interaktiv prototype. Tar høyde for feil og mangler. Om noe feiler, gi beskjed til Tore. </p>
        </div>
      </footer>

    </div>
  );
}