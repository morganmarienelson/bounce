import {ActionIcon, Group, useMantineColorScheme} from "@mantine/core";
import {Sun, Moon } from "grommet-icons"

export function ColorModeSwitcher() {
    const {colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center">
            <ActionIcon
                onClick={()=> toggleColorScheme()}
                size="xl"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[1]: theme.colors.gray[7],
                })}>
            {colorScheme === "dark" ? (
                <Sun />) : (
                    <Moon />
                )}
            </ActionIcon>
        </Group>
    )
}