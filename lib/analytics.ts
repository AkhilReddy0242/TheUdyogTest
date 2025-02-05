export async function trackNewUser(userId: string) {
  try {
    const response = await fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error('Failed to track user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error tracking user:', error);
  }
}

export async function getAnalytics(startDate?: Date, endDate?: Date) {
  try {
    const params = new URLSearchParams();
    if (startDate) params.append('start', startDate.toISOString());
    if (endDate) params.append('end', endDate.toISOString());

    const response = await fetch(`/api/analytics/track?${params}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch analytics');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return null;
  }
}