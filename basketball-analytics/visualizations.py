"""
Visualization functions for basketball game analysis
"""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import seaborn as sns
import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots
import numpy as np
import pandas as pd

# Set style
try:
    plt.style.use('seaborn-v0_8-darkgrid')
except:
    try:
        plt.style.use('seaborn-darkgrid')
    except:
        plt.style.use('default')
sns.set_palette("husl")

# Team colors
TEAM_COLORS = {
    'Arizona': '#002449',  # Navy blue
    'Florida': '#0021A5',  # Florida blue
}

def plot_score_progression(game_flow_df, key_events=None, figsize=(14, 8)):
    """Plot score progression throughout the game"""
    fig, ax = plt.subplots(figsize=figsize)
    
    ax.plot(game_flow_df['time'], game_flow_df['arizona_score'], 
            marker='o', linewidth=2.5, markersize=8, 
            label='Arizona', color=TEAM_COLORS['Arizona'])
    ax.plot(game_flow_df['time'], game_flow_df['florida_score'], 
            marker='s', linewidth=2.5, markersize=8, 
            label='Florida', color=TEAM_COLORS['Florida'])
    
    # Add halftime line
    ax.axvline(x=20, color='gray', linestyle='--', alpha=0.5, linewidth=1)
    ax.text(20, max(game_flow_df['arizona_score'].max(), game_flow_df['florida_score'].max()) + 5,
            'Halftime', rotation=90, ha='right', fontsize=10, alpha=0.7)
    
    # Annotate key events
    if key_events:
        for event in key_events:
            time = event['time']
            score_a = game_flow_df[game_flow_df['time'] == time]['arizona_score'].values[0]
            score_f = game_flow_df[game_flow_df['time'] == time]['florida_score'].values[0]
            ax.annotate(event['event'], 
                       xy=(time, max(score_a, score_f)),
                       xytext=(10, 20), textcoords='offset points',
                       bbox=dict(boxstyle='round,pad=0.5', fc='yellow', alpha=0.7),
                       arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=0'),
                       fontsize=9, ha='left')
    
    ax.set_xlabel('Time (minutes)', fontsize=12, fontweight='bold')
    ax.set_ylabel('Points', fontsize=12, fontweight='bold')
    ax.set_title('Score Progression: Arizona vs. Florida', fontsize=16, fontweight='bold', pad=20)
    ax.legend(loc='upper left', fontsize=11, framealpha=0.9)
    ax.grid(True, alpha=0.3)
    ax.set_xlim(-1, 41)
    ax.set_ylim(0, max(game_flow_df['arizona_score'].max(), game_flow_df['florida_score'].max()) + 10)
    
    plt.tight_layout()
    return fig

def plot_win_probability(win_prob_df, game_flow_df, figsize=(14, 8)):
    """Plot win probability for Arizona throughout the game"""
    fig, ax = plt.subplots(figsize=figsize)
    
    ax.fill_between(win_prob_df['time'], 0, win_prob_df['win_probability'] * 100,
                    alpha=0.3, color=TEAM_COLORS['Arizona'], label='Arizona Win Probability')
    ax.plot(win_prob_df['time'], win_prob_df['win_probability'] * 100,
           linewidth=3, color=TEAM_COLORS['Arizona'], label='Arizona')
    
    # Add 50% line
    ax.axhline(y=50, color='gray', linestyle='--', alpha=0.5, linewidth=1)
    
    # Add halftime line
    ax.axvline(x=20, color='gray', linestyle='--', alpha=0.5, linewidth=1)
    
    ax.set_xlabel('Time (minutes)', fontsize=12, fontweight='bold')
    ax.set_ylabel('Win Probability (%)', fontsize=12, fontweight='bold')
    ax.set_title('Win Probability: Arizona vs. Florida', fontsize=16, fontweight='bold', pad=20)
    ax.legend(loc='best', fontsize=11, framealpha=0.9)
    ax.grid(True, alpha=0.3)
    ax.set_xlim(-1, 41)
    ax.set_ylim(0, 100)
    
    plt.tight_layout()
    return fig

def plot_team_comparison(team_stats_df, figsize=(16, 10)):
    """Create comprehensive team comparison charts"""
    fig, axes = plt.subplots(2, 3, figsize=figsize)
    fig.suptitle('Team Performance Comparison', fontsize=18, fontweight='bold', y=1.02)
    
    # Shooting percentages
    shooting_metrics = ['fg_pct', '3pt_pct', 'ft_pct']
    shooting_data = team_stats_df[shooting_metrics].T * 100
    ax1 = axes[0, 0]
    shooting_data.plot(kind='bar', ax=ax1, color=[TEAM_COLORS['Arizona'], TEAM_COLORS['Florida']], width=0.7)
    ax1.set_title('Shooting Percentages', fontsize=12, fontweight='bold')
    ax1.set_ylabel('Percentage (%)', fontsize=10)
    ax1.set_xticklabels(['Field Goal %', '3-Point %', 'Free Throw %'], rotation=0, ha='center')
    ax1.legend(['Arizona', 'Florida'], fontsize=9)
    ax1.grid(True, alpha=0.3, axis='y')
    ax1.set_ylim(0, 100)
    
    # Made shots
    made_shots = ['fg_made', '3pt_made', 'ft_made']
    made_data = team_stats_df[made_shots].T
    ax2 = axes[0, 1]
    made_data.plot(kind='bar', ax=ax2, color=[TEAM_COLORS['Arizona'], TEAM_COLORS['Florida']], width=0.7)
    ax2.set_title('Shots Made', fontsize=12, fontweight='bold')
    ax2.set_ylabel('Count', fontsize=10)
    ax2.set_xticklabels(['Field Goals', '3-Pointers', 'Free Throws'], rotation=0, ha='center')
    ax2.legend(['Arizona', 'Florida'], fontsize=9)
    ax2.grid(True, alpha=0.3, axis='y')
    
    # Rebounds and turnovers
    misc_stats = ['rebounds', 'turnovers', 'assists']
    misc_data = team_stats_df[misc_stats].T
    ax3 = axes[0, 2]
    misc_data.plot(kind='bar', ax=ax3, color=[TEAM_COLORS['Arizona'], TEAM_COLORS['Florida']], width=0.7)
    ax3.set_title('Rebounds, Turnovers, Assists', fontsize=12, fontweight='bold')
    ax3.set_ylabel('Count', fontsize=10)
    ax3.set_xticklabels(['Rebounds', 'Turnovers', 'Assists'], rotation=0, ha='center')
    ax3.legend(['Arizona', 'Florida'], fontsize=9)
    ax3.grid(True, alpha=0.3, axis='y')
    
    # Advanced metrics
    advanced = ['effective_fg_pct', 'offensive_rating', 'defensive_rating']
    advanced_data = team_stats_df[advanced].T
    advanced_data['effective_fg_pct'] *= 100
    ax4 = axes[1, 0]
    advanced_data.plot(kind='bar', ax=ax4, color=[TEAM_COLORS['Arizona'], TEAM_COLORS['Florida']], width=0.7)
    ax4.set_title('Advanced Metrics', fontsize=12, fontweight='bold')
    ax4.set_ylabel('Value', fontsize=10)
    ax4.set_xticklabels(['eFG%', 'Off Rating', 'Def Rating'], rotation=0, ha='center')
    ax4.legend(['Arizona', 'Florida'], fontsize=9)
    ax4.grid(True, alpha=0.3, axis='y')
    
    # Shot distribution pie chart (Arizona)
    ax5 = axes[1, 1]
    az_fga = team_stats_df.loc['Arizona', 'fg_attempted']
    az_3pta = team_stats_df.loc['Arizona', '3pt_attempted']
    az_fta = team_stats_df.loc['Arizona', 'ft_attempted']
    az_shots = [az_fga, az_3pta, az_fta]
    ax5.pie(az_shots, labels=['2PT FGA', '3PT FGA', 'FT A'], autopct='%1.1f%%',
           colors=['#1f77b4', '#ff7f0e', '#2ca02c'], startangle=90)
    ax5.set_title('Arizona Shot Distribution', fontsize=12, fontweight='bold')
    
    # Shot distribution pie chart (Florida)
    ax6 = axes[1, 2]
    fl_fga = team_stats_df.loc['Florida', 'fg_attempted']
    fl_3pta = team_stats_df.loc['Florida', '3pt_attempted']
    fl_fta = team_stats_df.loc['Florida', 'ft_attempted']
    fl_shots = [fl_fga, fl_3pta, fl_fta]
    ax6.pie(fl_shots, labels=['2PT FGA', '3PT FGA', 'FT A'], autopct='%1.1f%%',
           colors=['#1f77b4', '#ff7f0e', '#2ca02c'], startangle=90)
    ax6.set_title('Florida Shot Distribution', fontsize=12, fontweight='bold')
    
    plt.tight_layout()
    return fig

def plot_player_radar(player_stats, player_name, team, figsize=(10, 10)):
    """Create radar chart for individual player"""
    stats = player_stats[team][player_name]
    
    # Select key metrics for radar
    categories = ['Points', 'Rebounds', 'Assists', 'FG%', '3PT%', 'FT%', 'Steals', 'Blocks']
    values = [
        stats['points'] / 30.0 * 100,  # Normalize to 30
        stats['rebounds'] / 10.0 * 100,  # Normalize to 10
        stats['assists'] / 10.0 * 100,  # Normalize to 10
        stats['fg_pct'] * 100,
        (stats['3pt_made'] / max(stats['3pt_attempted'], 1)) * 100,
        (stats['ft_made'] / max(stats['ft_attempted'], 1)) * 100,
        stats['steals'] / 5.0 * 100,  # Normalize to 5
        stats['blocks'] / 5.0 * 100,  # Normalize to 5
    ]
    
    # Number of variables
    N = len(categories)
    
    # Compute angle for each category
    angles = [n / float(N) * 2 * np.pi for n in range(N)]
    angles += angles[:1]  # Complete the circle
    
    # Add values
    values += values[:1]
    
    # Plot
    fig, ax = plt.subplots(figsize=figsize, subplot_kw=dict(projection='polar'))
    ax.plot(angles, values, 'o-', linewidth=2, color=TEAM_COLORS[team])
    ax.fill(angles, values, alpha=0.25, color=TEAM_COLORS[team])
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories, fontsize=11)
    ax.set_ylim(0, 100)
    ax.set_title(f'{player_name} ({team}) Performance Radar', 
                fontsize=14, fontweight='bold', pad=20)
    ax.grid(True)
    
    plt.tight_layout()
    return fig

def plot_player_comparison(player_stats_df, top_n=4, figsize=(14, 8)):
    """Compare top players from both teams"""
    # Get top scorers
    top_players = player_stats_df.nlargest(top_n, 'points')
    
    fig, axes = plt.subplots(1, 2, figsize=figsize)
    
    # Points, rebounds, assists
    metrics = ['points', 'rebounds', 'assists']
    x = np.arange(len(top_players))
    width = 0.25
    
    for i, metric in enumerate(metrics):
        offset = width * (i - 1)
        values = top_players[metric].values
        colors = [TEAM_COLORS[team] for team in top_players['team']]
        axes[0].bar(x + offset, values, width, label=metric.capitalize(), alpha=0.8)
    
    axes[0].set_xlabel('Players', fontsize=11, fontweight='bold')
    axes[0].set_ylabel('Count', fontsize=11, fontweight='bold')
    axes[0].set_title('Top Players: Points, Rebounds, Assists', fontsize=12, fontweight='bold')
    axes[0].set_xticks(x)
    axes[0].set_xticklabels([p.split(' (')[0] for p in top_players.index], rotation=45, ha='right')
    axes[0].legend()
    axes[0].grid(True, alpha=0.3, axis='y')
    
    # Shooting efficiency
    shooting_eff = top_players[['fg_pct', 'points']].copy()
    shooting_eff['fg_pct'] *= 100
    colors = [TEAM_COLORS[team] for team in top_players['team']]
    
    scatter = axes[1].scatter(shooting_eff['fg_pct'], shooting_eff['points'],
                            s=200, c=colors, alpha=0.6, edgecolors='black', linewidth=2)
    
    for idx, (player, row) in enumerate(shooting_eff.iterrows()):
        player_name = player.split(' (')[0]
        axes[1].annotate(player_name, (row['fg_pct'], row['points']),
                        xytext=(5, 5), textcoords='offset points', fontsize=9)
    
    axes[1].set_xlabel('Field Goal %', fontsize=11, fontweight='bold')
    axes[1].set_ylabel('Points', fontsize=11, fontweight='bold')
    axes[1].set_title('Shooting Efficiency vs. Scoring', fontsize=12, fontweight='bold')
    axes[1].grid(True, alpha=0.3)
    
    # Add legend
    az_patch = mpatches.Patch(color=TEAM_COLORS['Arizona'], label='Arizona')
    fl_patch = mpatches.Patch(color=TEAM_COLORS['Florida'], label='Florida')
    axes[1].legend(handles=[az_patch, fl_patch])
    
    plt.tight_layout()
    return fig

def plot_momentum_chart(game_flow_df, figsize=(14, 8)):
    """Plot momentum shifts (scoring runs)"""
    # Calculate point differential
    game_flow_df = game_flow_df.copy()
    game_flow_df['point_diff'] = game_flow_df['arizona_score'] - game_flow_df['florida_score']
    
    fig, ax = plt.subplots(figsize=figsize)
    
    # Fill positive (Arizona lead) and negative (Florida lead) areas
    ax.fill_between(game_flow_df['time'], 0, game_flow_df['point_diff'],
                    where=(game_flow_df['point_diff'] >= 0),
                    alpha=0.3, color=TEAM_COLORS['Arizona'], label='Arizona Lead')
    ax.fill_between(game_flow_df['time'], 0, game_flow_df['point_diff'],
                    where=(game_flow_df['point_diff'] < 0),
                    alpha=0.3, color=TEAM_COLORS['Florida'], label='Florida Lead')
    
    ax.plot(game_flow_df['time'], game_flow_df['point_diff'],
           linewidth=3, color='black', label='Point Differential')
    
    # Zero line
    ax.axhline(y=0, color='gray', linestyle='-', alpha=0.5, linewidth=1)
    
    # Halftime line
    ax.axvline(x=20, color='gray', linestyle='--', alpha=0.5, linewidth=1)
    
    ax.set_xlabel('Time (minutes)', fontsize=12, fontweight='bold')
    ax.set_ylabel('Point Differential (Arizona - Florida)', fontsize=12, fontweight='bold')
    ax.set_title('Momentum Chart: Point Differential Over Time', fontsize=16, fontweight='bold', pad=20)
    ax.legend(loc='best', fontsize=11, framealpha=0.9)
    ax.grid(True, alpha=0.3)
    ax.set_xlim(-1, 41)
    
    plt.tight_layout()
    return fig

def create_interactive_dashboard(game_flow_df, win_prob_df, team_stats_df, player_stats_df):
    """Create interactive Plotly dashboard"""
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=('Score Progression', 'Win Probability', 
                        'Team Shooting Comparison', 'Top Players'),
        specs=[[{"secondary_y": False}, {"secondary_y": False}],
               [{"type": "bar"}, {"type": "scatter"}]]
    )
    
    # Score progression
    fig.add_trace(
        go.Scatter(x=game_flow_df['time'], y=game_flow_df['arizona_score'],
                  mode='lines+markers', name='Arizona',
                  line=dict(color=TEAM_COLORS['Arizona'], width=3)),
        row=1, col=1
    )
    fig.add_trace(
        go.Scatter(x=game_flow_df['time'], y=game_flow_df['florida_score'],
                  mode='lines+markers', name='Florida',
                  line=dict(color=TEAM_COLORS['Florida'], width=3)),
        row=1, col=1
    )
    
    # Win probability
    fig.add_trace(
        go.Scatter(x=win_prob_df['time'], y=win_prob_df['win_probability'] * 100,
                  mode='lines', name='Arizona Win %',
                  fill='tozeroy', line=dict(color=TEAM_COLORS['Arizona'], width=3)),
        row=1, col=2
    )
    
    # Shooting comparison
    shooting_metrics = ['fg_pct', '3pt_pct', 'ft_pct']
    for metric in shooting_metrics:
        fig.add_trace(
            go.Bar(name=metric.replace('_', ' ').title(),
                  x=['Arizona', 'Florida'],
                  y=[team_stats_df.loc['Arizona', metric] * 100,
                     team_stats_df.loc['Florida', metric] * 100],
                  showlegend=False),
            row=2, col=1
        )
    
    # Top players scatter
    top_players = player_stats_df.nlargest(4, 'points')
    for team in ['Arizona', 'Florida']:
        team_players = top_players[top_players['team'] == team]
        fig.add_trace(
            go.Scatter(x=team_players['fg_pct'] * 100,
                      y=team_players['points'],
                      mode='markers+text',
                      name=team,
                      text=[p.split(' (')[0] for p in team_players.index],
                      textposition="top center",
                      marker=dict(size=15, color=TEAM_COLORS[team])),
            row=2, col=2
        )
    
    # Update layout
    fig.update_xaxes(title_text="Time (minutes)", row=1, col=1)
    fig.update_yaxes(title_text="Points", row=1, col=1)
    fig.update_xaxes(title_text="Time (minutes)", row=1, col=2)
    fig.update_yaxes(title_text="Win Probability (%)", row=1, col=2)
    fig.update_xaxes(title_text="Team", row=2, col=1)
    fig.update_yaxes(title_text="Percentage (%)", row=2, col=1)
    fig.update_xaxes(title_text="FG %", row=2, col=2)
    fig.update_yaxes(title_text="Points", row=2, col=2)
    
    fig.update_layout(
        height=800,
        title_text="Arizona vs. Florida Game Dashboard",
        title_x=0.5,
        showlegend=True
    )
    
    return fig

def plot_shot_chart(player_name, team, shots_data, figsize=(10, 10)):
    """
    Create shot chart for a player
    shots_data should be a list of dicts with 'x', 'y', 'made', 'type' (2pt/3pt)
    """
    fig, ax = plt.subplots(figsize=figsize)
    
    # Draw court (simplified)
    # Basket
    basket = plt.Circle((0, 0), 0.75, fill=False, color='black', linewidth=2)
    ax.add_patch(basket)
    
    # 3-point line (simplified arc)
    three_pt_arc = mpatches.Arc((0, 0), 23.75*2, 23.75*2, angle=0, 
                               theta1=0, theta2=180, color='black', linewidth=2)
    ax.add_patch(three_pt_arc)
    
    # Paint
    paint = mpatches.Rectangle((-8, -47.5), 16, 19, fill=False, color='black', linewidth=2)
    ax.add_patch(paint)
    
    # Plot shots
    for shot in shots_data:
        marker = 'o' if shot['made'] else 'x'
        color = 'green' if shot['made'] else 'red'
        size = 100 if shot['made'] else 80
        ax.scatter(shot['x'], shot['y'], c=color, marker=marker, s=size, alpha=0.7, edgecolors='black')
    
    ax.set_xlim(-30, 30)
    ax.set_ylim(-50, 5)
    ax.set_aspect('equal')
    ax.set_title(f'{player_name} ({team}) Shot Chart', fontsize=14, fontweight='bold')
    ax.axis('off')
    
    # Legend
    made_patch = plt.Line2D([0], [0], marker='o', color='w', markerfacecolor='green', 
                           markersize=10, label='Made')
    missed_patch = plt.Line2D([0], [0], marker='x', color='w', markerfacecolor='red', 
                             markersize=10, label='Missed')
    ax.legend(handles=[made_patch, missed_patch], loc='upper right')
    
    plt.tight_layout()
    return fig

