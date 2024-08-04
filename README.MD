# Fairplay Indexer

## Overview
FairPlay Indexer is designed to index and search through potential matchpools efficiently. It helps to provide quick and accurate retrieval of profiles, with allowed data filter.

## Development
- Install dependencies 
```
npm install
```
- Update fairplay contract address in `subgraph.yaml`.
- Start graph node 
```
docker-compose -f docker-compose.yaml up -d
```
- Create graph local node with
```
npm run create-local
```
- Deploy the graph with
```
npm run deploy-local
```

## License

