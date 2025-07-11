import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.resumeText}>About Me</Text>

        <View style={styles.profileCard}>
          <View style={styles.headerIcons}>
            <Text style={styles.sideIcon}>⭐</Text>
            <Text style={styles.sideIcon}>⋮</Text>
          </View>

          <Image
            source={require('./assets/pas_foto.jpg')} // ✅ gambar dari lokal
            style={styles.profileImage}
          />

          <Text style={styles.nameText}>Karen Kudemus</Text>
          <Text style={styles.subText}>Filkom 2023</Text>
          <Text style={styles.subText}>Informatics</Text>

          <Text style={styles.editIcon}>✏</Text>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.menuSection}>
        {/* Gambar dari lokal */}
        <MenuItem
          icon={require('./assets/experience.png')}
          title="Experience"
          description="Semester 4, cukup mahir di bidang front-end development."
        />

        {/* Gambar dari base64 */}
        <MenuItem
          icon={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d15vCd1fef716dZVUAMEaTZSscrV1GziALqFTUuaFBgEHFiuGJccK5EIYJx4siWaDSi4haDRgPXxJ2LIFEzGh0ymbCIGlHGizFabI3gBjSy05/5o+pA0/Ryfr9fVb1reT8fj/No6D6n3p9f/U53fU7Vp74VmUlfRMQWwMOBnYGV9cfO6/y6EthGVaNNyhrgp8BP1vm4dq1fv5WZN8sqNDObU6gbgIjYFjgAOBh4PrC9tCCz2dwB/DPwZeBLmfk9cT1mZssiaQAiYmfgBVQH/WcCW3VehFk7rqFuBoCvZuaN4nrMzNarswYgIh4AHAUcDuwDRCfBZjq3Ax8F3pGZV6qLMTNbW+sNQESsAI4ETgZ2bTXMrJ/uBM4A/jwzfyyuxcwMaLkBiIgDgbcDe7UWYjYcdwEfB96WmT9UF2Nm09ZKAxAR+wDvAPZvfONmw3c38AngDZn5U3UxZjZNjTYAEbEb8G7gRY1t1Gy8rgVemplfVxdiZtPTWAMQEU8GzgZ2bGSDZtOwBngrcHJm3q0uxsymo5EGICKOBE4Htlx4Y2bT9E9UZwOuVhdiZtOwYpEvjogVEXEq8Df44G+2iKcB/1oPzpqZtW7uMwARsR3wKeB5jVZkZm/OzLepizCzcZurAYiIRwLnAo9uvCIzAzg2M09TF2Fm4zVzA1Af/C8EdmilIjNb8urM/Ii6CDMbp5kagPq0/4X4J3+zLqwBjsjMT6gLMbPxWfYQYL2k76fwwd+sKyuAMyPiIHUhZjY+s9wF8Bd44M+sa5sDn46I56gLMbNxWdYlgPo+/79pvRoz25DVwGP9VEEza8omzwDUK/yd3kEtZrZh2wIfVhdhZuOx0QagXtv/bLzIj1kfPDciXq4uwszGYaOXACLis/jBPmZ9cgPwmMy8Vl2ImQ3bBs8A1I/09cHfrF+2Bz6kLsLMhm9jlwDe0VkVZjaLgyLiJeoizGzY1nsJoH4gyRe6L8fMlulnwP+ZmT9XF2Jmw3S/MwD1gj9vF9RiZsv368Br1UWY2XCt7xLAkcBeHddhZrM7KiK2UBdhZsN0nwYgIh4AnCyqxcxmsxL4j+oizGyY1j0DcBSwq6IQM5vLH6oLMLNhWrcBOFxShZnN6ykR8VvqIsxseO5pACJiZ2AfYS1mNh+fBTCzmd1zG2BEvJr+rfm/BrgAOAe4BFgFrMrM1dKqbBLqO2J+HdgJeCRwQP2xu7Ku9bgN2NW3BJrZLNZuAL5Ifx73exvwAeDUzLxOXYzZ2iLi94FTqRqDvnhtZv6luggzG44VABGxLfBMcS1Lzgb2zMzjffC3PsrMvwX2BN4P3C0uZ8mT1QWY2bAszQAcAGylLARI4CTgUD/z3PouM2/MzNcBTwS+ra4H2FddgJkNy1IDcLC0iurg/7LMPDk39nhCs57JzG8DzwWuEpfyHyLioeIazGxAVtQriT1fXMfJmflxcQ1mc8nMnwKHAreLS/FdPGa2bCuAh1M9YlTlbOAUYb7ZwjLzG+jX5vdlADNbthVUy4mq3AYc49P+NgaZ+VG0t9LuJ8w2s4FZAewszP+AB/5sZN4I3CzKfmK9doGZ2SYpzwCsobqX2mw0MvMm4AxR/LbAo0TZZjYwyjMAF/g+fxupvxZmP0KYbWYDojwDcI4o16xtlwI3irILUa6ZDYyyAbhElGvWqnqo9WJRfCHKNbOBUV4CWCXKNevCpaLcQpRrZgOjPAPgBsDGrBTlFqJcMxuYFcA2imA/0tdGrhTlFqJcMxsY3zNs1o5SlPvQiHiQKNvMBsQNgFk7SmH2HsJsMxsINwBmLcjMm4Gfi+ILUa6ZDYgbALP2lKLcQpRrZgPiBsCsPaUotxDlmtmAuAEwa08pyi1EuWY2IG4AzNpTinILUa6ZDYgbALP2XCHKLUS5ZjYgbgDM2lOKch8aEQ8UZZvZQLgBMGtPKcwuhNlmNgBuAMxaUi93/QtRfCHKNbOBcANg1q5SlOvVAM1so9wAmLWrFOUWolwzGwg3AGbtKkW5hSjXzAbCDYBZu0pRbiHKNbOBcANg1q5SlFuIcs1sINwAmLVLtRjQjl4LwMw2xg2AWbtKYbbvBDCzDXIDYNaizLwJ+KUovhDlmtkAuAEwa18pyi1EuWY2AG4AzNpXinILUa6ZDYAbALP2laLcQpRrZgPgBsCsfaUotxDlmtkAuAEwa18pyi1EuWY2AG4AzNpXinJ3jIgHiLLNrOfcAJi1rxRmF8JsM+sxNwBmLavXArhBFF+Ics2s59wAmHWjFOUWolwz6zk3AGbdKEW5Xg7YzNbLDYBZN0pRbiHKNbOecwNg1o1SlFuIcs2s59wAmHWjFOUWolwz6zk3AGbdKEW5O3ktADNbHzcAZt0ohdkeBDSz+3EDYNaBzLwRrwVgZj3iBsCsO6UotxDlmlmPuQEw684VotxClGtmPeYGwKw7pSi3EOWaWY+5ATDrTinKLUS5ZtZjbgDMulOKcgtRrpn1mBsAs+6UolyvBWBm9+MGwKw7pTDbawGY2X24ATDrSGbeANwoii9EuWbWU24AzLpVinILUa6Z9ZQbALNulaLcQpRrZj0VQCqCMzMUuWZKEfFe4HXqOsyscTcDq4Br61/X/u+lX3+cmXfKKlzH5uoCzCamVBdgZq3YBnhU/bEhN0TEF4HPA1/OzNWdVLYBPgNg1qGIOAT4/9R1mJnc7cDXqJqBL2TmtV0X4AbArEMR8VvAt9R1mFmvJHAR8Gng9My8tYtQNwBmHYqIhwC/UNdhZr11NXAicEZmrmkzyA2AWcci4kZgO3UdZtZrlwFvyszz2grwbYBm3SvVBZhZ7+0FfCEi/ntE7NNGgBsAs+6V6gLMbDD2By6MiM9GxG5NbtgNgFn3SnUBZjY4LwIuiYgnN7VBNwBm3SvVBZjZIO0IfD0ijmxiY24AzLp3hboAMxusLYG/iYhTI2KhY7gbALPuleoCzGzw3gCcFxFz31HkBsCse6W6ADMbhedRDQg+cp4v9joAZgIRcROwrboOMxuFnwP7ZuYPZ/kinwEw0yjVBZjZaOwAnDvr5QA/DXBEImIL4DeAx9Ufj69/3VFU0vXAd4FL61+/C3ynT4/DFCqp3hszsyY8GvhURBy43CWEfQlgJCLihcC7gLmuBXXoh8AbMvNcdSFKEfE+4A/VdZjZ6LwrM49bzif6EsDARcTjIuKrwDn0/+APVY3nRMRXI2LKPwGX6gLMbJTesNx1AtwADFhEvBX4NvA76lrm8DvAt+vXMEWlugAzG63Tl7NioBuAgYqINwB/AmymrmUBmwF/Ur+WqSnVBZjZaG0JnL2pZwd4BmCAIuJQ4LNU798YJHBYZp6lLqQrEbED8DN1HWY2ap/LzMM29IduAAYmIvYDvgZsra6lYbcBz8zMC9SFdCUiVgPbqOsws1HbNzMvWt8f+BLAgETE5lQ/+Y/t4A/Va/ps/RqnolQXYGaj944N/YEbgGF5AbCLuogW7UL1GqeiVBdgZqO3f0QcuL4/cAMwLK9UF9CBKbzGJaW6ADObhLev78mBbgAGop7mPEBdRwcO2NTk6oiU6gLMbBL2Ao5c9zfdAAzHHzCN92sF1WudglJdgJlNxskR8YC1f2MKB5SxOEhdQIem8lpLdQFmNhm7Aket/Ru+DXAAImIrYDWwhbqWjtwJbJuZt6sLaZPXAjCzjl2Ymfst/Y/PAAzD45jOwR+q1zr65wRk5s+Bm9V1mNlk7BMROy/9z5TuuR6yJ6gLEHgCcIm6iA5cQTWg07XXZObpglyzUYqIbYGV9cfeVJcy96NfP2gH1a3WH4Z+FWYbtre6AIGpvOZSlFuIcs1GKTNXZ+blmfn1zHxnZj6Vqhk4lWql0744eOk/3AAMw1TPAExBKcotRLlmk5GZ12Xm8cCewNnqemrPrM9WuAHou3oA8LHqOgQeW7/2sStFuYUo12xyMvNK4FDgJESD92vZinpNGTcA/Te1AcAlkxgExA2A2SRk5WTgZeibgIPBDcAQTOVU+PpM4bWXotydImKMD5Uy67XM/DhwsriM50fEFm4A+m8qw3DrM4XXXopyA9hDlG02daegnQnYHni4G4D+m8JPwRsy+teemT8DfiWKL0S5ZpOWmQkcg/bugJVuAHpswgOASzwI2K5ClGs2efVg4AeEJezsBqDfpjoAuGQqg4BXiHJ9CcBM61RgjSjbZwB6bvSnwJdhCvugFOUWolwzo1onALhAFO8zAD03hSG4TZnCPihFuYUo18zudY4o12cAem4KP/1uyhT2QSnKLUS5ZnYv1TNP3AD0lQcA7zGFQcBSlPuwCexbs75bJcr1JYAem/oA4JIpDAKWolyvBWCmp2oAfAagx5SnvvfJzFj7A9hHWM+oLwNk5k+BW0TxhSjXzKieIiiK3sYNQH+pht/uAi5dz+9fWv+ZggcB21OIcs1MzA1Af6l+6v1eZt5vdar69y4T1AMjPwNQK0W5hSjXzMTcAPSQeADwmxv5M9W0qgcB21OIcs1MzA1APykHADfWAGzsz9o0hUFArwZoZp1yA9BPylPefWwAYPyXAUpRbiHKNTMxNwD91LcBwCUeBGxPKcrdeQKXV8xsPdwA9FOvBgCXeBCwVaUoN4DdRdlmJuQGoGd6PAC4xIOALcjM6/FaAGbWITcA/dPXAcBZPqcNHgRsTyHKNTMhNwD909cBwFk+py2+DNCOQpRrZkJuAPqnrwOASzwI2J5SlFuIcs1MyA1A//RyAHCJBwFbVYpyC1GumQm5AeiRAQwALvEgYDu8GJCZdcYNQL/0fQBwns9t0tgHAUtR7sqI2FKUbWYibgD6pe8DgPN8btPGfBmgFOV6LQCzCXID0C99HwBc4kHAFmTmdcCtovhClGtmIm4A+qXXA4BLPAjYKq8FYGadcAPQEwMaAFziQcB2lKLcQpRrZiJuAPpjKAOAi3xNEzwI2I5ClGtmIm4A+mMoA4CLfE1TxnwZoBTlFqJcMxNxA9AfQxkAXOJBwHaUotxClGtmIm4A+mMQA4BLPAjYmlKUu7PXAjCbFjcAPTDAAcAlHgRsnuougBXAbqJsMxNwA9APQxsAbOJrFzHmQcDrgJnPyDSkEOWamYAbgH4Y2gBgE1+7qFFeBsjMxGsBmFkH3AD0w9AGAJd4ELAdpSi3EOWamYAbgH5Q/TR72TwDgEs8CNiaUpRbiHLNTMANgJh4ALCJIT4PAjavFOUWolwzE3ADoDfUAcAmtzGPMQ8ClqLcQpRrZgJuAPSGOgDY5DbmNdbLAKUod2VEqJpRM+uYGwC9oQ4ALvEgYPNKUe4KYHdRtpl1zA2A3iAHAJd4ELAVyrUA9hDlmlnH3AAIjWAAsI1tzWKUg4D1WgBXiuILUa6ZdcwNgNbQBwDb2NYsPAjYvEKUa2YdcwOgNfQBwDa2NauxXgYoRbmFKNfMOuYGQGvoA4BLPAjYvFKUW4hyzaxjbgC0Bj0AuMSDgK0oRbmFKNfMOuYGQGREA4BtbnM5RjkIiK4B2MVrAZhNgxsAnbEMALa5zeUY6yBgKcpdAewmyjazDrkB0BnLAGCb21yuMV4G+Alwuyi7EOWaWYfcAOiMZQBwiQcBG1SvBXCFKL4Q5ZpZh9wA6IxiAHCJBwFboWoAvBqg2QS4ARAY4QBgF9veGA8CNqsQ5ZpZh9wAaIxtALCLbW+MBwGbVYhyzaxDbgA0xjYA2MW2N2WMlwFKUW4hyjWzDrkB0BjbAOASDwI2qxTl7hIRm4uyzawjbgA0RjUAuMSDgI0rRbmb4bUAzEbPDUDHRjwA2GXG+oxxEPBavBaAmbXEDUD3xjoA2GXG+oxuELBeC+BKUXwhyjWzjrgB6N5YBwC7zNgQXwZoTiHKNbOOuAHo3lgHAJd4ELBZpSjXiwGZjZwbgO6NcgBwiQcBG+flgM2sFW4AOjSBAUBF1trGOAhYinILUa6ZdcQNQLfGPgCoyFrb6AYB0TUAu3otALNxcwPQrbEPACqy1jW2ywClKHczYFdRtpl1wA1At8Y+ALjEg4DNuRa4Q5RdiHLNrANuALo16gHAJR4EbE5mrsFrAZhZC9wAdGRCA4DKTPAgYJMKUa6ZdcANQHemMgCozAQPAjapEOWaWQc85dsd5anpv4yIvxTmd+0J6M5AtKEU5XoxoIGIiBXAfsBBVHMwK+sPgFX1xyXAOcAF9aUlmzg3AN0Z23Ban+0NnK4uokGlKLcQ5doyRcTWwNHAccBOG/i0PeuPZwDHA9dFxKnAB7qcDbL+8SWA7oxqOK3nxravVasB7hoRm4mybRMi4hDgcuCdbPjgvz471V9zeb0Nmyg3AB0QDwBO0dgGAUtR7uZ4LYDeicpJwFnA7gtsanfgrIg4KSKikeJsUNwAdEM5ADhFYxsEXIXXAjCqgz9wJnAi0MRBO+ptnekmYHrcAHRjbKekh2A0+7we2LpKFF+Icm39TgSOaGG7R9TbtglxA9ANDwB2b2z7vBTlFqJcW0d9vf6EFiNO8EzAtLgB6MZofhodkLHt81KUW4hybS31tP9pNHPaf4MxwGl1lk2AG4CWeQBQxoOAzShEuXZfR7PYwN9y7V5n2QS4AWifBwA1xjYIWIpyC1Gu1epFfo7rMPK4OtNGzm9y+8Z2KnpIxrTvS1Gu1wLQ24/Z7vNf1E51po2cG4D2jW0YbUjGtO9ViwFtDuwiyrbKQRPJtI65AWjfmH4KHZox7ftrgDtF2YUo1yqKRnZMzbNtgBuAFnkAUG40g4BeC2DSVm76U0aRaR1zA9AuDwBqeRCwGYUo1ypuAKwVbgDaNaZT0EM1pvegFOUWolyrbDuRTOuYG4B2+Tqa3pjeg1KUW4hyzaxFbgDaNaafPodqTO9BKcotRLlm1iI3AC3xAGBvjGYQEK8FYGYNcgPQHg8A9sOYBgFLUe4WeCjMbHTcALRnTKeeh24s78UqvBaAmTXEDUB7xjR8NnSjeC8y827galF8Ico1s5a4AWjPWH7qHIMxvRelKLcQ5ZpZS9wAtMADgL3jQcDFFaJcM2uJG4B2eACwXzwIuLhClGtmLXED0I4xnXIei7G8J6UotxDlmllL3AC0YxRDZyMzlvekFOXuFhH+98JsRPwXuh1j+WlzTMbynpSi3C2AXUTZZtYCNwAN8wBgb41lEPAa4C5RdiHKNbMWuAFongcA+2kUg4D1WgBXieL3EOWaWQs2VxcwQspTzftk5sXC/E2KiCcBF4ninwBcIspuUgk8XJBbCDLnUs8r7AccRDX/sbL+8GNulykiUl3DHFZTrZi5iurv+jnABZm5RlpVT7kBaJ5q2Owu4FJR9iwupapV8b23N3C6ILdpV4hyC1HuskXE1sDRwHHATuJyrHvbAnvWH88Ajgeui4hTgQ9k5m3K4vrGlwCapzoD8L0hfHPXNX5PFO9BwMUUotxliYhDgMuBd+KDv91rJ6rvicvr7xGruQFokHgA8Jui3Hmoah3LIGApyi1EuRsVlZOAs4DdxeVYf+0OnBURJ0VEqIvpAzcAzVIOALoB2LRRDAKiawB279taAPU/5GcCJwL+R902Jai+V850E+AGoGnKU8xuAJZnDJcBSlHuFlSDdH1yInCEuggbnCOovncmzQ1As5QDgN8RZc/jO+juZR/DioBX47UAlq75n6CuwwbrhKnPBLgBaJZyAPB2UfbM6lo9CDinei2Aq0XxhSj3Pupp/9PwaX+bXwCn1d9Lk+QGoCEeAJyZBwEXU4py+7IY0NF44M8WtzvV99IkuQFojgcAZ+NBwMWUotxClHuPehDxOHUdNhrH9W24tSuTfNEt8QDgbDwIuJgpLwa0H77P35qzE9X31OS4AWiOarjsToY1ALjkO1S1K4xhELAU5Rai3LUdpC7ARmeS31NuAJqj+qnysiENAC6pa75MFD+GMwClKLcPawGMoYGzfpnk95T6L/IoeABwbh4EnF8pyt0S2FmUvaRvaxHY8E3ye8oNQDM8ADgfDwLO72rgblF2IcpdMsl/rK1Vk/yecgPQDOUp5SE/3lZZ+6AvA2TmXUx8LQAzW4wbgGYoBwCH8AjgDbkUDwIuohTlFqLcJavE+TY+k/yecgPQDA8AzsGDgAsrRbmFKHfJJP+xtlZN8nvKDcCCPAC4MA8Czq8U5apXAxzyZS/rp0l+T7kBWJxyAHAM37Sq1zCGQcBSlFuIcpecI8638Znk95QbgMV5BcDFeEXA+alWA9xd/Cz1C4DrhPk2LtdRfU9NjhuAxXkAcDEeBJxfKcrdCuFaAJm5BjhVlW+jc2r9PTU5bgAW5wHABXgQcCFXMd21AD4AXCmuwYbvSqrvpUlyA7AADwA2xoOAc6jXArhGFF+IcgHIzNuAY4BU1mGDlsAx9ffSJLkBWIwHAJvhQcD5laLcQpR7j8w8GzhFXYcN1in199BkuQFYjAcAm+FBwPmVotxClLuuk4GPq4uwwfk41ffOpLkBWIwHAJvhQcD5laLcQpR7H5mZwMuo/jH35QDblKT6XnlZ/b0zaW4AFuMBwAZ4EHAhpShXvRjQPbJyEnAoHgy0DbsSODQzT/LBv+IGYE7iAcAxXf9fonpNgx4ERNgAiNcCuJ/6eu6ewPF4nQC713VU3xN7Tv2a/7o2VxcwYH4EcLO+CbxSkLs0CDjUpqoU5W4FPAy4VpS/XvVE96kR8W5gP+Agqss8K+uPbYXlresGYOhn8rYCtlcXsZbVVOv6r6L6O30OcMFU7/PfFDcA8/MAYLPUg4BDbQCuploLYDNBdkHPGoAl9T/4/7P+WK+I2Bv4RmdF3d8ZmXmsMH9hEfEeqtsxVZ6YmUP9uyvnSwDz8wBgszwIOIfMvBPdk8wKUW4j6gPHj4QlHBkRDxTmL6Su/UhhCT/ywX8xbgDmpzoD8L0xDQAuqV/T90TxHgScTyHKbdJnhNnbA78vzF/U76M9/a9870bBDcAcvAJga7wi4HxKUW4hym3Sp8X5rxXnL0Jdu/q9Gzw3APPxAGA7VK9t6CsClqLcQpTbmMz8V+AHwhIeHxFPFebPpa758cISflC/d7YANwDz8QBgO9SDgENVinILUW7T1KeS1T9Jz0Nds/o9GwU3APPxAGA7PAg4n1KUu3vf1gKYk/pU8qER8TBxDctW13qouAz1ezYKbgDm4wHAFngQcG6lKHdrYCdRdmMy83vA94UlbAG8Wpg/q1ejuwQK8P36PbMFuQGYkQcAW+dBwNldBagWOilEuU1T/0R5VET0fl2WusajxGWo36vRcAMwOw8AtsuDgDPyWgCNUB9UVgIHi2tYjoOpalVSv1ej4QZgdh4AbJcHAedTinILUW6jMvP/R78a5NHi/OVQ13hJ/V5ZA9wAzM4DgO3yIOB8SlFuIcptw4fF+ftHxF7iGjaorm1/cRnq92hU3ADMbk9R7qgHAJeIBwFV720TSlFuIcptwyepHiaj9Hpx/saoa1tN9R5ZQ9wAzE51u84UTv8vUb3WwdyKtR6lKLcQ5TYuM28GPiEu48iIeIS4hvupazpSXMYn6vfIGuIGYHaq257cALRvyLe0laLcPUayFsAS9SnmLYCTxDWsz0lob/0D/XszOm4AZqd47CroB5S6pHqtqve2CaUodxRrASzJzG+hb7ZfGhGPFtdwj7qWl4rL+Gb93liD3ADM7hpB5p3AdwW5Kt9FMwioeG+bolwLYA9RbltOF+evAE4R17C2U9AfK9TvySip39QhulqQOYkBwCXCQUDFe9uIzLwDrwXQlE8C6mvNh0bEb4lroK5BvezvzXj4rxVuAGanOD39j4JMNcVrHvplllKUW4hyW9GTYcAA/kxcA1Q1qGc8PPzXEjcAsztXkPl5Qaaa4jUr3tsmXSHKLUS5bfordQHA8yPiyarwOvv5qvy19OG9GCU3ALO7ALi+w7zr6sypuYDqtXfleoa/n0tRbiHKbU1mfhv4uroO4K0TzV7y9fq9sBa4AZhRZq4B3tlh5Kl15qTUr/nUDiPfOYL9XIpyC1Fu27r8e74hT4+IZ3UdWmc+vevc9ejDezBaAaQiODPV15XmVj817gfA7i1HXQnsmZm3tZzTSxGxNXA53eznRw190LL+R/srguhbM/OBgtzWRcSl6B8SdVFm7ttlYERcCOzTZeZ6fDczHy+uoRMRITkO+wzAHOoDxetov3l6w1QP/gD1a39D2zHA64Z+8K+VotwHRMRo1gJYR5dnoTZkn4h4YVdhdZb64A/92Pej5gZgTpl5Du1eI3tbZn6uxe0PQr0P3tZixFvr93IMrkS3FkAhym3bJ+nH7aHvqs+ItarOeFfbOctwNb71r3VuABZzAvCZFrb7GeC/trDdofqvtLefT2hhuxL1WgDXiuLHthgQAJl5J/BedR3AI4G3dJDzljpL7b31vrcWuQFYQGYm8BKa+wk1qe67fUm9beM++/nPaO6yy9sY534uRbmFKLcLHwZuVBcBHN/m44LrbR/f1vZncCNe978TbgAWlJU3A4dRnYKd15XAIZn5lhEelBZW7+e3AIew+H4+LDPfPNL9XIpyC1Fu6zLzJvqxFO0WwOltPHyp3ubp6B/4A3B6vc+tZW4AGlJfq96TqoOe5f716+uvedSIrkW3pt5Hj6LaZ7Osx3Bd/TV7jny2ohTlFqLcrrwX6MNA7lOAV7ew3VfX21a7jX5ccpkE3wbYgohYAewHHEw1TfswqiembUb1wJmrqZadPRe4YAT3n0ustZ9fCOwN7ArsAtxNdcD/CXAR1aqCk9jPEfEqNKdPv5+ZjxHkdiYi3gX8kboO4Abg0Zn5kyY2FhEPA74PbN/E9hb07sxs+86f3lHdBugGwGxEIuLZwH8TRN+SmQ8S5HYmIn4d+BGwrboW4NOZ+ZImNhQRnwIOb2JbC1oNPCIzf6YupGteB8DMmlCKch8YETuKsjtRH5jeo66jdnhEPG/RjdTb6MPBH+A9Uzz4K/kMgNmI1KtU3ormCW77ZObFgtzORMR2Cy/nYQAAGoJJREFUVGcBdlDXQtXs7ZWZt8zzxRHxQOAy+jG/8XOqn/4nOfznMwBmtrB6RUPVWgCFKLcz9QHq7eo6agVw0gJffxL9ec/ePtWDv5IbALPxKUW5hSi3ax8EVqmLqB0bEU+a9Yvqrzm2hXrmsYpqn1rH3ACYjU8pyh3laoDrysxbgT9V11HbHPhURDx4uV9Qf+6n6q/tgz+t96l1zA2A2fiUotxClKvwUeDf1UXUHs5st35+uP6aPvh3qn1pAm4AzManFOUWotzO1evUH6OuYy0vjohNLhBUf86LO6hnuY7xmv86bgDMxucKUW4hypXIzPOAs9R1rOW0iHjshv6w/rPTOqxnU86q96GJ+DZAs5GJiEcBl4vid8zMn4qyOxcRu1CtoteHxYEA/hfwxHVvDaxv+fsG0JfVGldTrWZ4jbqQPvBtgGbWlCsQNfZM7yzANcCb1XWs5TGsfy3999Kfgz/Am33w13MDYDYy9VoAjawTP4dClKv0Qapne/TFKyPinmWC6/9+pbCedV2Cb/vrBTcAZuNUinILUa5M/ZCpo6geQtUXp0fEIyLiEfTjUcZL7gaOmsKDuYbADYDZOJWi3EKUK5WZ3wLer65jLdsBn64/thPXsrb31/vKesANgNk4laLcSSwGtAFvAa5SF7GWveuPvriKah9ZT7gBMBunUpRbiHLlMvNm4A/VdfTYH9b7yHrCDYDZOJWi3EKU2wuZeQ5wjrqOHjqn3jfWI14HwGyExGsBPHTKz3WPiN2o7sffRl1LT9wMPCYz+3R5pFe8DoCZNelKvBaARH2gO0FdR4+c4IN/P7kBMBuhzLwNuE4UX4hy++R9wLfVRfTAt6n2hfWQGwCz8SpFuYUotzcy827g1cCU73dfA7y63hfWQ24AzMarFOUWotxeycypr3j3wXofWE+5ATAbr1KUW4hy++jNwL+pixD4N/r1jARbDzcAZuNVinILUW7vZOZq4EXArepaOnQr8KL6tVuPuQEwG69SlDvl1QDvJzMvBY5W19Gho+vXbD3nBsBsvEpR7jYRsYMou5cy82PAGeo6OnBG/VptALwQkNlIRcTWwC1Uf8+7tndmflOQ21sR8QDgIuBx6lpa8l1gn8yc0uWORnghIDNrlNcC6Jf6wPgiYIzXxldTXff3wX9A3ACYjdsVotxClNtrmfkD4BXqOlrwivq12YC4ATAbt1KUW4hyey8zPwu8X11Hg95fvyYbGDcAZuNWinILUe5QHAdcrC6iARdTvRYbIDcAZuNWinILUe4gZOYdwGHAL9S1LOAXwGH1a7EBcgNgNm6lKNdrAWxCZl4JHIHuqY2LSOCI+jXYQLkBMBu3UpS7bUT8mih7MDLzi8Cfq+uYw5/XtduAeR0AsxGr7z2/RRT/hMz8lih7MCJiM+ArwDPUtSzT14Fn+yl/zfE6AGbWuPq+bK8F0GP1gfT3GMb6AKuB3/PBfxzcAJiNXynKLUS5gxIRWwB/CmyrrmUZtgX+rK7ZBs4NgNn4eTGgnoqIhwBfBl6prmUGrwD+oa7dBswNgNn4laLcQpQ7CBHxSOAC4JnqWubwDODCiPg/1IXY/NwAmI1fKcotRLm9FxFPAy4E9lTXsoBHUTUB+6sLsfm4ATAbv1KUW4hyey0iXkY19T+GRyb/GvCViHi5uhCbnRsAs/ErRbleC2AtUXkbcAawpbicJm0BfCwi3h4Rvr17QNwAmI2faggQfBYAuGc9hs8A/0VdS4v+GDgrIh6oLsSWxw2A2chl5i3A9aL4yS8JHBEPA84HXqSupQOHAP8jIlaqC7FNcwNgNg2lKLcQ5fZCRDye6ol5T1TX0qHfBi6OiN9SF2Ib5wbAbBpKUW4hypWLiAOB/wnspq5FYBeqMwEHqwuxDXMDYDYNpSi3EOVKRcQxwDnANupahB5ENRNwvLoQWz83AGbT4NUAOxARm0fEh4D34H9fodoHfxERf+3lg/vH36Bm01CKcgtRbuci4sHAF4HXqGvpIS8f3ENuAMymoRTlbjeFf/Qj4uHAvwDPVtfSY14+uGfcAJhNQynMLoTZrauXwr0IeIy6lgFYWj74WepCzA2A2STUawH8VBRfiHJbFxHHAl8FHqquZUB+DfhyRPyxupCpcwNgNh2lKHd0iwFFxIMi4pPAu4HN1fUM0GbA2yPicxEx5TslpNwAmE1HKcotRLmtWOsxvi9R1zICh1ItGjTkpyIOlhsAs+koRbmFKLdx9eI+3wAep65lRB5N1QQcpC5katwAmE1HKcotRLmNqZ/kdxJwLrC9uJwx2g44OyL+LCJ8XOqId7TZdJSi3EKU24iI2B74AnAi4MfdtieANwN/P4VbR/vADYDZdKhWA3xwfRAdnIh4HHAJ8LvqWubwnfpjaA4AvhkRv6EuZOzcAJhNRynMLoTZc4mI/wRcCPwHdS1zOA94av1xnriWeTwcuCAiXqouZMzcAJhNRGb+CviZKL4Q5c6sXs//PcAngAeq65nDe4GDMvPmzLwZOKj+vaF5APC3EfHeiPCtli1wA2A2LaUotxDlziQidgL+EThGXcsc7gZem5nHZOaapd/MzDWZeQzw2vpzhuZ1wNfq98Ya5AbAbFpKUW7vFwOKiH2BbwJPU9cyh5uAAzPzLzf0CfWfHVh/7tD8X8C3ImI/dSFj4gbAbFpKUW4hyl2WiHgNcD6wi7qWOVwBPCUzv7ypT6w/5ynoBkIXsRL47/V7ZQ1wA2A2LaUotxDlblR9f/8HgA8BW6rrmcNFwD6Z+b3lfkH9ufvUXzs0WwIfiogPRIRvyVyQGwCzaSlFuYUod4PqA8jpVNfGh+izwDMy87pZv7D+mmfU2xii1wKnuwlYjBsAs2kpRbnbR8SDRdkbchrwKnURc3obcHhm3jrvBuqvPbze1hC9iuo9tDkFkIrgzHTnZtax+slrq0Xxv5mZvViYJiKeC2zymnkP3QG8OjPPbHKjEfEy4MMM8zLIAZn5D+oiFhERkuOwzwCYTUh9X/jPRfGFKPc+6jMRf62uYw6/AJ7T9MEfoN7mc+qMofnrHp5dGgQ3AGbTU4pyC1Huuo4CdlUXMaN/A/bNzPPbCqi3vW+dNSS7Ur2nNiM3AGbTU4pyC1HuPeonzf1ndR0zOp/q4N/6gbnO2LfOHJL/7KcIzs47zGx6SlFuIcpd27PoRx3LdSbVaf/OTs3XWc+ps4eioHpvbQZuAMympxTl9mE1wKGs8pfAmzPzyMy8o/PwzDsy80iqx/NKBtTmMJT3tjfcAJhNTynKLUS5a3uSuoBluJXqFj/57Xl1DYdT1dR3Q3hve8UNgNn0lKLch0TEdqLsJXuJ8zflauDpmdmbBXrqWp5OVVuf9f297R03AGbTUwqzC2E29Ps+9/OBJ2TmxepC1lXX9AT6PRzY5/e2l9wAmE3MxNcC6Ou/eacBz8rM69WFbEhd27Po7+p7m6kLGJq+/mUws3apngZXiHKX/Eqcv65bgN/LzGMz8y51MZuSmXdl5rHA71HV3ic3qwsYGjcAZtNUinILUe6SZT81rwP/DuyXmZ9UFzKruub9qF5DX/TpvR0ENwBm01SKcgtR7pLvivOXfAl4YmZeqi5kXnXtT6R6LX3Ql/d2MNwAmE1TKcotRLlLviLOT+BPgQMz85fiWhZWv4YDqV6Ter0A9Xs7OG4AzKapFOWqFwP6R3Sv/Ubg4Mw8ITPXiGpoXGauycwTgIOpXqNCSfXe2gzcAJhNUynK/bWI2FaUTWYm8DFB9GXAkzLzXEF2J+rX9iSq19q1j9Xvrc0gEJ22ycxQ5JoZ1Afhm0Txj89M2fXaiNiG6iC1e0eRnwX+oL79cvTq/fsx4LCOIq8E9hry/o0IyXHYZwDMJigzV6N79nshygXuWQfhNR1E3Q28MTNfPOSD06wy8+bMfDHwRqp90LbXTGn/NskNgNl0laLcQpR7j8z8EvD+FiN+Bjw3M9/ZYkav1a/9uVT7oi3vr99Lm4MbALPpKkW5hSh3Xa8HPtLCdr9JtaTv5IfS6n3wBKp90rSPUL2HNic3AGbTNdXVAIF7BgKPAt7X4GY/Cjw1M69scJuDVu+Lp1Ltm6a8DzjKg3+LcQNgNl2lKLcQ5d5PVl4PHMBiT7u7Enh+Zr4yM29rprrxyMzbMvOVwPOp9tW8rgYOyMzX++C/ODcAZtNVinILUe4GZeY/AI8F/pjZ9ksJnEA1he5r0ZtQ76O9qPZZOcOXllTvzWPr98oa4NsAzSYqIh4PfEcUv119J0LvRMQKqqfePY3qvva9qB41u4LqYULfo1p29ivAP/on0flERAC/AzwbeBxVA7YN1Z0Dd1Ddqnkx8E/AV8e0eNK6VLcBBrCaaqd3rbf/AJhNQURsh27ltsdlph/eYoZ2HYBVimBgpSjXzIDMvAlQrUdfiHLNrLYCuFaU7QbATK8U5RaiXDOrKc8A7C3KNbN7laLcQpRrZjVlA3CQKNfM7lWKcgtRrpnVlJcA9ouInUTZZlaZ9GJAZlOmPAOwAjhOlG1mlVKUW4hyzaymPAMAcHREdPVITjO7v1KUu0P92FgzE1GeAQDYGjitXhDCzLpXCrMLYbbZ5K0AfgzcIKzhEKplIc2sY5l5I7q//3uIcs0MWJGZdwJfFNdxYkQcIa7BbKpKUW4hyjUz7n0Y0OelVVRLEp8ZESf6coBZ50pRbiHKNTPubQC+DNyuLISqCTgJOMuDgWadKkW5hSjXzKgbgPqhPF8T17LkEODyiHin1wkw60Qpyi1EuWbGvWcAQH8ZYG1bU60RsCoi/jkijo+IZ0TEnhGxrbo4s5EpRbmFKNfMgFh6lHVE7AxcQ3Uq3sysC9tk5q/URZgpKR8HDEBmXgtcpCjCzCarUBdgNlUr1vn/T0uqMLOpKtQFmE3Vug3A6cDVikLMbJIKdQFmU3WfBiAzbwVOFNViZtPj1QDNRNY9AwBwBnBZx3WY2TQV6gLMpup+DUBmrgHeJKjFzKanUBdgNlXrOwNAZp4HnN9xLWY2PYW6ALOpumcdgPv9QcQ+wIXdlmNmE/SgzLxFXYSZinwdgHVl5kXA5zqsxcymqVAXYDZFG2wAan8EXN9FIWY2WYW6ALMp2mgDkJlXUT2c545uyjGzCSrUBZhN0abOAJCZ/wIc1UEtZjZNhboAsynaZAMAkJlnAO9qtxQzm6gd1AWYTdGyGoDaG4EvtVWImU3WA9UFmE3RshuAeoGglwDfb68cM5sgNwBmArOcASAzbwJeCPy8nXLMbIK8BoCZwEwNAEBm/hDYF58JMLNmfEddgNkUzdwAwH2aAM8EmNmi/lVdgNkUzdUAwD2XAw7EdweY2fxuBy5WF2E2RXM3AFANBmbmccDL8WJBZja7z2TmL9RFmE3RBh8GNPOGIp4MnA3s2MgGzWwKnpSZ31AXYabUu4cBzapeMXBv/AAhM1uev/fB30ynsTMA99lo9SjhdwD7N75xMxuD64HHZ+Z16kLM1AZ/BmBtmXlRZj4deAFwWRsZZjZYCRzpg7+ZVisNwJLMPA94PPAK4Oo2s8xsMN6Smb6F2EyslUsA6w2KeADVUwUPB/YBopNgM+uTj2XmK9RFmPWJ6hJAZw3AfUIjdqa6PHAw8Exgq86LMLOufRV4fmbeqS7ErE8m1QDcp4CIbYEDqJqB5wPbSwsyszZcBjwlM29UF2LWN5NtANYWEVsADwd2BlbWHzuv8+tKYBtVjWY2s58A+2bmFepCzPrIDYDZJkTEm4A/F0RfmJn7CXKXJSJOAE5W17EBtwD7Z+Yl6kLM+mpUtwGataQU5Rai3E2KiN+nvwf/NcB/8sHfrJ/cANiQlKLcnSKid4OqEbE/8FF1HRtxbGaeqy7CzNbPDYANieoacgC7i7LXKyL2pHr2xpbqWjbgfZn5PnURZrZhbgBsSH5C9fhYhUKUez8R8VDgi8BD1LVswLnAseoizGzj3ADYYGQ1sXqlKH4PUe591AtqnQs8Ql3LBnyT6rr/GnUhZrZxbgBsaEpRbiHKvUdEBPBxYF91LRtwJXBgZt6iLsTMNs0NgA1NKcrtwxmAvwAOVRexATdSrfL3E3UhZrY8bgBsaFSDgNIGICJeAxynrGEj7gRelJl+8qfZgLgBsKEpRbmFKJeIeB7wAVX+MrwmM7+qLsLMZuMGwIamFOWujIjNuw6NiN8EPgNs1nX2Mr01Mz+mLsLMZucGwIZGdQlgM2C3LgMjYhfgPPr77ItPAm9RF2Fm83EDYEOziuqas0JncwD1UzL/Htilq8wZ/TPw8vTDRMwGyw2ADUp9f7lqLYCii5CI2Az4NPAbXeTN4d+AgzNTtSiTmTXADYAN0djvBPgg8LyOsmb1M6rb/X6uLsTMFuMGwIaoFOW23gBExPHAUW3nzOk24KDM/KG6EDNbnBsAGyLVGYCizY1HxIuAd7SZsYAEXpaZ/6IuxMya4QbAhqgU5bZ2BiAi9qVa5jfayljQn2TmZ9RFmFlz3ADYEJWi3N0iovG/MxHxCKoH/Gzd9LYb8pHMfLu6CDNrlhsAGyLVJYAtgJVNbjAiHkL1aN+HNrndBv034P9RF2FmzXMDYEN0NXCXKLuxywARsSVwNrBnU9ts2HeBwzJTta/NrEVuAGxwMvNuqiZAoWhwWx8D9m9we01aBfxuZt6kLsTM2uEGwIZq0GsBRMQpwEub2FYLfgUcmJlXqQsxs/a4AbChKkW5xaIbiIiX0d819O8GDs/Mb6sLMbN2uQGwoRrkGYCIeCbwkYZqacPrM/Pv1UWYWfvcANhQlaLcuRuAiHgMcBbV3QR99J7M/KC6CDPrhhsAG6pSlLtHRMy8WE9E7ET1dL/tmy+pEWcDx6mLMLPuuAGwoVJdAtga2HGWL4iIBwJfoKOnCc7hYuCl9ZMWzWwi3ADYUF0FqA5YxXI/sV458O+AJ7ZWzWJK4IWZeau6EDPrlhsAG6TMvBO4RhQ/yxzAqcDBbRWyoBuoHu17nboQM+ueGwAbsl4/FTAijgaObbeUud0J/MfM/L66EDPTcANgQ1aKcjd5BiAiDgRO66CWeb0qM7+uLsLMdNwA2JCVotyNNgAR8dvAp4DNuilnZqdk5pnqIsxMyw2ADVnvLgFExG7AecCDOqtmNn+bmSeqizAzPTcANmSlKHe9ZwAiYjuqe/137racZTsfeIW6CDPrBzcANmSqMwDbRMQOa/9GRGwOfBZ4nKakTbocOCQz71AXYmb94AbAhuxKIEXZ654F+BDwHEUhy/BTqtv9fqkuxMz6ww2ADVZm3g5cK4q/pwGIiDcBrxTVsSm3Ui308yN1IWbWL24AbOikg4ARcTjwNlENm5LAEZl5oboQM+sfNwA2dKUod4+IeApwJjDzw4E68sbMPEtdhJn1kxsAG7pSlPtU4BxgK1H+pvxVZp6qLsLM+mtzdQFmC1JdAniCKHc5vgQcrS7CzPrNZwBs6Ep1AT3zHeDFmXm3uhAz6zc3ADZ0qjMAfXQN8LuZebO6EDPrPzcANnRuACqrqQ7+qkckm9nAuAGwQcvMW4GpP8/+buDwzPyOuhAzGw43ADYGUz8LcHRmfkldhJnNLiK2FUXf7AbAxqBUFyD0zsz8K3URZja3laLcVW4AbAxKdQEinwP+WF2EmS1E1QBc6wbAxmCKlwAupFrmV/UwJDNrxt6iXJ8BsFEo1QV07EdUD/i5TV2ImS3sIFGuGwAbhSk96e6XVI/2/am6EDNbTETsBOwnivclABuFH1DdBz92dwCHZObl6kLMrBHHobsbz2cAbPgycw3wDXUdHXhFZp6vLsLMFhcRu6N9ZofPANhoXKAuoGUnZubfqosws8VFRACnAVsLy/AZABuNC9UFtOjMzDxFXYSZNeYE4BBh/g3Aj90A2FhcpC6gJV8DXqUuwsyaERFHACeKy/hiZt7pBsBGoZ6K/3d1HQ37PnBoZt6pLsTMFhOVE4EzgRCX83nwswBsXMZ0GeA6qtv9blAXYmaLqQf+zgJOQn/wvx34MrgBsHH5F3UBDbkFeEFmlupCzGx+EbFTRLwTuBztNf+1fS0zVwOEVxK1sYiIHYCr0U7WLmoN1Wn/z6sLMbPlq5/qt7L+2Jtqhb/96N8P2kdl5ofBDYCNTER8FPgDdR1mZj2UwC6ZeS30rzMxW9T71QWYmfXURUsHf3ADYCOTmf8K/A91HWZmPfTptf/HDYCNkc8CmJnd19XA6Wv/hhsAG6Ozqb7ZzcyscmJm3rr2b7gBsNHJzLuAv1LXYWbWE5cBZ6z7m74LwEYpIh5CtZLeTupazMzEXpCZ5637mz4DYKOUmb8EXquuw8xM7Pz1HfzBZwBs5CLis8CL1HWYmYnsm5nrfViaGwAbtYjYEfhfwA7qWszMOva5zDxsQ3/oSwA2apl5PfB6dR1mZh27HvijjX2CGwAbvcz8O2C918DMzEboDuCQzLxqY5/kBsCm4jXAjeoizMw6cFRmbvLpqG4AbBIy8xrgYODWTX2umdmAvSszz1jOJ3oI0CYlIp4HnANsoa7FzKxhXwIOzMw1y/lkNwA2ORFxKNVDMTZT12Jm1pDvU93yd9Nyv8CXAGxyMvMs4A+ono1tZjZ0PwdeOMvBH9wA2ERl5v+LVwo0s+Fb+sn/h7N+oRsAm6zM/BDwBnwmwMyG6UvMefAHNwA2cZn5buAAqkUzzMyG4l1UA38znfZfm4cAzYCIeBjwd8Az1bWYmW3EHVT3+Z+x6IZ8BsAMyMyfAM8GTgDuFpdjZrY+1wPPaOLgDz4DYHY/EfE04BPALupazMxqnwP+aFPL+87CZwDM1pGZ/wT8JvA3wF3icsxs2s6nGvQ7rMmDP/gMgNlGRcQjgD8B/m+8eqCZdecy4E2Z2dqDzNwAmC1DROwB/Bfg5cCW4nLMbLyuBk4Ezljukr7zcgNgNoOI2A14E/AKYCtxOWY2DglcRLVE+emZ2clDy9wAmM0hIh4MPAt4HtU6Ah4YNLNZ3A58Dfg88IXMvLbrAtwAmDUgIh7Lvc3AU/FlAjO7vxuAL1Id9L+cmauVxbgBMGtYRGwD/DawM/Cw+mPt/34Y8FB8F47ZmNwMrAKurX9d+7+Xfv1xZt4pq3Ad/xtcHIhbHCadWQAAAABJRU5ErkJggg==',
          }}
          title="Languages"
          description="Bahasa Indonesia (native), Bahasa Inggris (B2), Bahasa Jerman (A1)."
        />

        {/* Gambar dari URL */}
        <MenuItem
          icon={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
          }}
          title="Education"
          description="Lulusan SMA Negeri 9 Manado (2023)."
        />

        {/* Gambar dari lokal lainnya */}
        <MenuItem
          icon={require('./assets/skills.png')}
          title="Skills"
          description="Mahir front-end, sedang belajar back-end development."
        />
      </View>

      {/* Dots */}
      <View style={styles.dots}>
        <Text style={styles.dot}>●</Text>
        <Text style={styles.dot}>●</Text>
        <Text style={styles.dot}>●</Text>
      </View>
    </ScrollView>
  );
};

type MenuItemProps = {
  icon: ImageSourcePropType;
  title: string;
  description: string;
};

const MenuItem = ({ icon, title, description }: MenuItemProps) => (
  <TouchableOpacity style={styles.menuItem}>
    <Image source={icon} style={styles.menuIcon} />
    <View>
      <Text style={styles.menuText}>{title}</Text>
      <Text style={styles.menuSub}>{description}</Text>
    </View>
  </TouchableOpacity>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    backgroundColor: '#2c2c2c',
    paddingBottom: 30,
    alignItems: 'center',
  },
  resumeText: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  profileCard: {
    width: '90%',
    backgroundColor: '#3a3a3a',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  headerIcons: {
    position: 'absolute',
    top: 15,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sideIcon: {
    fontSize: 18,
    color: 'white',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#555',
    marginBottom: 10,
    marginTop: 10,
  },
  nameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: '#ccc',
    fontSize: 12,
  },
  editIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: 16,
    color: '#aaa',
  },
  menuSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    tintColor: 'white',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
  menuSub: {
    color: '#aaa',
    fontSize: 12,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 5,
  },
  dot: {
    color: '#aaa',
    fontSize: 10,
  },
});
