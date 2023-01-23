# api-Car-Models

Back-end for Car-Models, an api to collect racing logs.
## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want

4. Configure the `.env` file using the `.env.example` file

6. Run the back-end in a development environment:

```bash
npm run dev
```
## Routes

POST: /racer - Create a new racer
Body:
{
	name: string;
	birth: Date;
	number: number
}

PUT: /racer/:id - Update a racer
Body: { number: number }

POST: /circuit - Create a new circuit
Body:
{
  track: number;
	racer: number;
	car: number;
	time: number;
}


DELETE: /circuit/:id - Delete a circuit

GET: /ranking/:trackId - Get the ranking of a track
