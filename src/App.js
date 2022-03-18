import React from "react"
import Layout from "./components/layout"
import Profile from "./components/profile"
import OtherInfos from "./components/other-infos"
import NoSearch from "./components/no-search";
import usePoke from "./hooks/poke-hooks";

const App = () => {
    const {pokeState}=usePoke();
    return (
        <Layout>
            {pokeState.hasPoke ? (
                <>
                    {pokeState.loading ? (
                        <p>Loading</p>
                    ) : (
                        <>
                            <Profile />
                            <OtherInfos />
                        </>
                    )}

                </>
            ) : (
                <NoSearch />
            )}
        </Layout>
    )
}

export default App;
