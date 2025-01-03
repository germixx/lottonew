from functions.fantasy5 import fantGetDailyResult


def previousDataDays(previousDay, previousDate):
    
    if(previousDay == 'Monday'):

        fantasyData = fantGetDailyResult(previousDate)

        return {
            'fantasy5': {
                'midday': fantasyData[0],
                'evening': fantasyData[1],
             },
        }

    if(previousDay == 'Tuesday'):

        fantasyData = fantGetDailyResult(previousDate)

        return {
            'fantasy5': {
                'midday': fantasyData[0],
                'evening': fantasyData[1],
             },
        }

    if(previousDay == 'Wednesday'):
        
        fantasyData = fantGetDailyResult(previousDate)

        return {
            'fantasy5': {
                'midday': fantasyData[0],
                'evening': fantasyData[1],
             },
        }



    if(previousDay == 'Thursday'):
        
        fantasyData = fantGetDailyResult(previousDate)

        return {
            'fantasy5': {
                'midday': fantasyData[0],
                'evening': fantasyData[1],
             },
        }

    if(previousDay == 'Friday'):

        fantasyData = fantGetDailyResult(previousDate)

        return {
            'fantasy5': {
                'midday': fantasyData[0],
                'evening': fantasyData[1],
             },
        }

    if(previousDay == 'Saturday'):

        fantasyData = fantGetDailyResult(previousDate)

        return {
            'fantasy5': {
                'midday': fantasyData[0],
                'evening': fantasyData[1],
             },
        }
    
    if(previousDay == 'Sunday'):
        
        fantasyData = fantGetDailyResult(previousDate)

        return {
            'fantasy5': {
                'midday': fantasyData[0],
                'evening': fantasyData[1],
             },
        }
