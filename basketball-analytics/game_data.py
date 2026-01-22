"""
Game Data Module for Arizona vs. Florida (November 3, 2025)
Contains all game statistics and event data
"""

import pandas as pd
import numpy as np

# Game Information
GAME_INFO = {
    'date': '2025-11-03',
    'venue': 'T-Mobile Arena, Las Vegas',
    'home_team': 'Florida',
    'away_team': 'Arizona',
    'final_score': {'Arizona': 93, 'Florida': 87},
    'florida_rank': 3,
    'arizona_rank': 13,
    'series': 'Hall of Fame Series'
}

# Team Statistics
TEAM_STATS = {
    'Arizona': {
        'points': 93,
        'fg_made': 30,
        'fg_attempted': 61,
        'fg_pct': 0.492,
        '3pt_made': 10,
        '3pt_attempted': 25,
        '3pt_pct': 0.400,
        'ft_made': 23,
        'ft_attempted': 28,
        'ft_pct': 0.816,
        'rebounds': 41,
        'off_rebounds': 12,
        'def_rebounds': 29,
        'assists': 18,
        'turnovers': 14,
        'steals': 8,
        'blocks': 3,
        'fouls': 18,
        'effective_fg_pct': 0.574,
        'offensive_rating': 115.8,
        'defensive_rating': 108.2,
        'pace': 72.5
    },
    'Florida': {
        'points': 87,
        'fg_made': 30,
        'fg_attempted': 70,
        'fg_pct': 0.429,
        '3pt_made': 7,
        '3pt_attempted': 27,
        '3pt_pct': 0.259,
        'ft_made': 20,
        'ft_attempted': 30,
        'ft_pct': 0.666,
        'rebounds': 39,
        'off_rebounds': 13,
        'def_rebounds': 26,
        'assists': 15,
        'turnovers': 15,
        'steals': 7,
        'blocks': 4,
        'fouls': 22,
        'effective_fg_pct': 0.479,
        'offensive_rating': 108.2,
        'defensive_rating': 115.8,
        'pace': 72.5
    }
}

# Player Statistics
PLAYER_STATS = {
    'Arizona': {
        'Koa Peat': {
            'points': 30,
            'rebounds': 7,
            'assists': 5,
            'fg_made': 11,
            'fg_attempted': 18,
            'fg_pct': 0.611,
            '3pt_made': 2,
            '3pt_attempted': 5,
            'ft_made': 6,
            'ft_attempted': 7,
            'turnovers': 2,
            'steals': 1,
            'blocks': 1,
            'minutes': 36,
            'plus_minus': 12
        },
        'Jaden Bradley': {
            'points': 27,
            'rebounds': 4,
            'assists': 5,
            'fg_made': 9,
            'fg_attempted': 16,
            'fg_pct': 0.563,
            '3pt_made': 4,
            '3pt_attempted': 8,
            'ft_made': 5,
            'ft_attempted': 6,
            'turnovers': 3,
            'steals': 2,
            'blocks': 0,
            'minutes': 35,
            'plus_minus': 8
        },
        'Kharchenkov': {
            'points': 12,
            'rebounds': 8,
            'assists': 3,
            'fg_made': 4,
            'fg_attempted': 10,
            'fg_pct': 0.400,
            '3pt_made': 2,
            '3pt_attempted': 6,
            'ft_made': 2,
            'ft_attempted': 2,
            'turnovers': 4,
            'steals': 1,
            'blocks': 1,
            'minutes': 32,
            'plus_minus': 5
        },
        'Burries': {
            'points': 10,
            'rebounds': 5,
            'assists': 2,
            'fg_made': 3,
            'fg_attempted': 8,
            'fg_pct': 0.375,
            '3pt_made': 2,
            '3pt_attempted': 5,
            'ft_made': 2,
            'ft_attempted': 3,
            'turnovers': 2,
            'steals': 2,
            'blocks': 0,
            'minutes': 28,
            'plus_minus': 3
        }
    },
    'Florida': {
        'Thomas Haugh': {
            'points': 27,
            'rebounds': 9,
            'assists': 2,
            'fg_made': 11,
            'fg_attempted': 18,
            'fg_pct': 0.611,
            '3pt_made': 1,
            '3pt_attempted': 3,
            'ft_made': 4,
            'ft_attempted': 6,
            'turnovers': 3,
            'steals': 1,
            'blocks': 2,
            'minutes': 38,
            'plus_minus': -8
        },
        'Xaivian Lee': {
            'points': 14,
            'rebounds': 4,
            'assists': 5,
            'fg_made': 5,
            'fg_attempted': 17,
            'fg_pct': 0.294,
            '3pt_made': 2,
            '3pt_attempted': 8,
            'ft_made': 2,
            'ft_attempted': 4,
            'turnovers': 4,
            'steals': 2,
            'blocks': 0,
            'minutes': 34,
            'plus_minus': -12
        },
        'Fland': {
            'points': 12,
            'rebounds': 3,
            'assists': 3,
            'fg_made': 4,
            'fg_attempted': 12,
            'fg_pct': 0.333,
            '3pt_made': 2,
            '3pt_attempted': 7,
            'ft_made': 2,
            'ft_attempted': 3,
            'turnovers': 2,
            'steals': 1,
            'blocks': 0,
            'minutes': 31,
            'plus_minus': -6
        },
        'Riley Kugel': {
            'points': 11,
            'rebounds': 6,
            'assists': 2,
            'fg_made': 4,
            'fg_attempted': 11,
            'fg_pct': 0.364,
            '3pt_made': 1,
            '3pt_attempted': 5,
            'ft_made': 2,
            'ft_attempted': 4,
            'turnovers': 3,
            'steals': 2,
            'blocks': 1,
            'minutes': 29,
            'plus_minus': -4
        }
    }
}

# Game Flow Data (simulated based on game narrative)
# Times in minutes, scores are cumulative
GAME_FLOW = [
    {'time': 0, 'arizona_score': 0, 'florida_score': 0, 'leader': None},
    {'time': 2, 'arizona_score': 4, 'florida_score': 6, 'leader': 'Florida'},
    {'time': 5, 'arizona_score': 8, 'florida_score': 18, 'leader': 'Florida'},  # Florida up 12
    {'time': 8, 'arizona_score': 15, 'florida_score': 22, 'leader': 'Florida'},
    {'time': 10, 'arizona_score': 22, 'florida_score': 26, 'leader': 'Florida'},
    {'time': 12, 'arizona_score': 30, 'florida_score': 32, 'leader': 'Florida'},
    {'time': 15, 'arizona_score': 38, 'florida_score': 38, 'leader': 'Tie'},
    {'time': 18, 'arizona_score': 45, 'florida_score': 42, 'leader': 'Arizona'},  # Arizona takes lead
    {'time': 20, 'arizona_score': 50, 'florida_score': 46, 'leader': 'Arizona'},  # Halftime
    {'time': 22, 'arizona_score': 55, 'florida_score': 52, 'leader': 'Arizona'},
    {'time': 25, 'arizona_score': 60, 'florida_score': 58, 'leader': 'Arizona'},
    {'time': 28, 'arizona_score': 65, 'florida_score': 67, 'leader': 'Tie'},  # Florida ties
    {'time': 30, 'arizona_score': 70, 'florida_score': 69, 'leader': 'Arizona'},  # Arizona retakes lead
    {'time': 32, 'arizona_score': 75, 'florida_score': 72, 'leader': 'Arizona'},
    {'time': 35, 'arizona_score': 80, 'florida_score': 78, 'leader': 'Arizona'},
    {'time': 37, 'arizona_score': 85, 'florida_score': 82, 'leader': 'Arizona'},
    {'time': 38, 'arizona_score': 88, 'florida_score': 85, 'leader': 'Arizona'},
    {'time': 40, 'arizona_score': 93, 'florida_score': 87, 'leader': 'Arizona'},
]

# Key Events
KEY_EVENTS = [
    {'time': 5, 'event': 'Florida leads by 12', 'team': 'Florida'},
    {'time': 15, 'event': 'Arizona 32-16 run begins', 'team': 'Arizona'},
    {'time': 20, 'event': 'Halftime: Arizona 50-46', 'team': 'Arizona'},
    {'time': 28, 'event': 'Florida ties game at 67', 'team': 'Florida'},
    {'time': 32, 'event': "Peat's key dunk", 'team': 'Arizona'},
    {'time': 38, 'event': "Fland's missed tying 3-pointer", 'team': 'Florida'},
    {'time': 40, 'event': 'Final: Arizona wins 93-87', 'team': 'Arizona'},
]

def get_team_stats_df():
    """Convert team stats to pandas DataFrame"""
    return pd.DataFrame(TEAM_STATS).T

def get_player_stats_df(team=None):
    """Convert player stats to pandas DataFrame"""
    if team:
        return pd.DataFrame(PLAYER_STATS[team]).T
    else:
        # Combine both teams
        all_players = {}
        for team_name, players in PLAYER_STATS.items():
            for player_name, stats in players.items():
                all_players[f"{player_name} ({team_name})"] = stats
        df = pd.DataFrame(all_players).T
        df['team'] = [p.split(' (')[1].rstrip(')') for p in df.index]
        return df

def get_game_flow_df():
    """Convert game flow to pandas DataFrame"""
    return pd.DataFrame(GAME_FLOW)

def calculate_win_probability(time, score_diff, home_team='Florida'):
    """
    Calculate win probability based on score difference and time remaining
    Simplified model for visualization purposes
    """
    time_remaining = 40 - time
    if time_remaining <= 0:
        return 1.0 if score_diff > 0 else 0.0
    
    # Base probability from score difference
    # Points per possession ~ 1.0, so 1 point = ~1% at start
    # As time decreases, each point becomes more valuable
    point_value = time_remaining / 40.0
    prob = 0.5 + (score_diff * point_value * 0.02)
    
    # Clamp between 0 and 1
    prob = max(0.0, min(1.0, prob))
    
    # Adjust for home court (small advantage)
    if home_team == 'Florida' and score_diff < 0:
        prob += 0.05
    elif home_team == 'Florida' and score_diff > 0:
        prob -= 0.05
    
    return max(0.0, min(1.0, prob))

def get_win_probability_data():
    """Generate win probability data for Arizona"""
    flow_df = get_game_flow_df()
    win_probs = []
    for _, row in flow_df.iterrows():
        score_diff = row['arizona_score'] - row['florida_score']
        prob = calculate_win_probability(row['time'], score_diff)
        win_probs.append({
            'time': row['time'],
            'win_probability': prob,
            'score_diff': score_diff
        })
    return pd.DataFrame(win_probs)

