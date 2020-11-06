
export const listSectorsQuery = `query listSectors {
	listSectors{
		idsectors
		sector
		short
		user
		active_from
	}
}`;



export const createSectorQuery = (sector) => {
	return `mutation createSector {
		createSector(
			input: {
				sector: "${sector.sector}"
				short: "${sector.short}"
				user: "${sector.emailAddress}"
			}
			) {
				idsectors
				sector
				short
				active_from
				user
			}
		}`;
	}