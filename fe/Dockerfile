FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install
RUN bun install -g serve
RUN bun run build

EXPOSE 5173

CMD ["serve", "-l", "5173", "dist/"]