import {ActionIcon, Group, useMantineColorScheme} from "@mantine/core";
import {Sun, Moon } from "grommet-icons"

export function ColorModeSwitcher() {
    const {colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center" mt="xl">
            <ActionIcon
                onClick={()=> toggleColorScheme()}
                size="2xl"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.blue[4]: theme.colors.gray[0],
                    color: theme.colorScheme === "dark" ? theme.colors.yellow[4]: theme.colors.blue[6]
                })}>
            {colorScheme === "dark" ? (
                <Sun />) : (
                    <Moon />
                )}
            </ActionIcon>
        </Group>
    )
}