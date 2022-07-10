async function main() {
    const { characters, greet } = await import('./character.mjs');

    characters.forEach(greet)
}

main();